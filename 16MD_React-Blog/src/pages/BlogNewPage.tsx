import { useMutation } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import { queryClient } from '../main';

import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import TextArea from '../components/TextArea';

import useToastSuccess from '../hooks/useToastSuccess';
import useBlogForm from '../hooks/useBlogForm';

import BlogApi from '../api/BlogApi';

export default function BlogNewPage () {
    const { createBlog } = BlogApi();
    const { toastHandle } = useToastSuccess();

    const {
        contentHandler,
        imageHandler,
        titleHandler,
        data,
        contents,
    } = useBlogForm();

    const { mutate } = useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
            toastHandle('Blog added!');
        },
    });

    return (
        <>
            <Form label='New blog'>
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
                <NavLink to='/blogs'>
                    <Button
                        label='post'
                        type='button'
                        onClick={ () => mutate(data) }
                    />
                </NavLink>
            </Form>
        </>
    );
}
