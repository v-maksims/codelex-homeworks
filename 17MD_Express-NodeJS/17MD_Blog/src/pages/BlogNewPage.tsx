import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { queryClient } from '../main';

import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import TextArea from '../components/TextArea';

import useToasts from '../hooks/useToasts';
import useBlogForm from '../hooks/useBlogForm';

import BlogApi from '../api/BlogApi';

export default function BlogNewPage () {
    const { createBlog, uploadBlogImage } = BlogApi();
    const navigate = useNavigate();

    const inputRef = useRef<HTMLInputElement>(null);

    const {
        toastSuccesHandler,
        toastErrorHandler,
    } = useToasts();
    const {
        contentHandler,
        titleHandler,
        data,
        contents,
        fields,
    } = useBlogForm();

    const { mutate } = useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
            toastSuccesHandler('Blog added!');
        },
        onError: () => toastErrorHandler('Error'),
    });

    return (
        <>
            <Form
                label='New blog'
                onSubmit={ (e) => {
                    e.preventDefault();
                    const formData = new FormData();
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    formData.append('image', inputRef.current.files[0]);
                    uploadBlogImage(formData);
                    (navigate('/blogs'));
                } }
            >
                <input ref={ inputRef } type="file" name='image'required />
                <Input
                    value=''
                    onChange={ (e) => titleHandler(e.currentTarget.value) }
                    type='text'
                    label='title'
                    name='title'
                    placeholder='Enter blog title'
                    required={ true }
                />
                <TextArea
                    onChange={ (e) => contentHandler(e.currentTarget.value) }
                    placeholder=''
                    value={ contents }
                    label='content'
                    name='content'
                    required={ true }
                    rows={ 10 }
                />
                <Button
                    label='post'
                    type='submit'
                    onClick={ () => { fields && mutate(data); } }
                />
            </Form>
        </>
    );
}
