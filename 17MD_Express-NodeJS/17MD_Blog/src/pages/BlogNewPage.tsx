import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { queryClient } from '../main';

import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import TextArea from '../components/TextArea';

import useToasts from '../hooks/useToasts';
import useBlogForm from '../hooks/useBlogForm';

import BlogApi from '../api/BlogApi';

export default function BlogNewPage () {
    const { createBlog } = BlogApi();
    const navigate = useNavigate();

    const {
        toastSuccesHandler,
        toastErrorHandler,
    } = useToasts();
    const {
        contentHandler,
        imageHandler,
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
                onSubmit={ () => (navigate('/blogs')) }
            >
                <Input
                    value=''
                    onChange={ (e) => imageHandler(e.currentTarget.value) }
                    type='text'
                    label='image'
                    name='image'
                    placeholder='Enter image URL'
                    required={ true }
                />
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
