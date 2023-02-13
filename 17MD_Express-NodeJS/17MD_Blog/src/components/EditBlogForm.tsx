import { useMutation } from '@tanstack/react-query';
import { TBlogs } from '../types/Blogs';
import { queryClient } from '../main';

import Form from '../components/Form';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import Modal from '../components/Modal';

import useModal from '../hooks/useModal';
import useBlogForm from '../hooks/useBlogForm';
import useToasts from '../hooks/useToasts';

import BlogApi from '../api/BlogApi';

type TEditBlogFormProps = {
    title: string
    content: string
    id: string
}

export default function EditBlogForm (props: TEditBlogFormProps) {
    const { toastSuccesHandler, toastErrorHandler } = useToasts();
    const { modal, modalHandler } = useModal();
    const { editBlog } = BlogApi();

    const {
        content,
        title,
        id,
    } = props;

    const {
        contentHandler,
        titleHandler,
        data,
        contents = content,
    } = useBlogForm();

    const { mutate: mutateBlog } = useMutation({
        mutationFn: (datas: TBlogs) => editBlog(id, datas),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blog', { id }] });
            toastSuccesHandler('Blog updated!');
        },
        onError: () => {
            toastErrorHandler('Something went wrong');
        },
    });

    const formButtonHandler = () => {
        mutateBlog({
            content: data.content ? data.content : content,
            title: data.title ? data.title : title,
        });
        modalHandler();
    };

    return (
        <>
            {modal && <Modal onClick={ modalHandler }>
                <Form
                    label='Edit blog'
                    onSubmit={ (e) => {
                        e.preventDefault();
                        formButtonHandler();
                    } }
                >
                    <Input
                        label='title'
                        name='title'
                        placeholder='Enter blog title'
                        required={ true }
                        onChange={ (e) => titleHandler(e.currentTarget.value) }
                        type='text'
                        value={ title }
                    />
                    <TextArea
                        label='content'
                        name='content'
                        required={ true }
                        rows={ 10 }
                        value={ contents || content }
                        onChange={ (e) => contentHandler(e.target.value) }
                        placeholder='Enter'
                    />
                    <Button
                        label='edit'
                        type='submit'
                    />
                </Form>
            </Modal>}

            {!modal && <Button
                label='edit blog'
                type='button'
                onClick={ modalHandler }
            />}
        </>
    );
}
