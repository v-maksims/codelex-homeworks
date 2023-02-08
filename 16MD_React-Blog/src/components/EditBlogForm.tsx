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
import useToastSuccess from '../hooks/useToastSuccess';

import BlogApi from '../api/BlogApi';

type TEditBlogFormProps = {
    title: string
    image: string
    content: string
    id: string
}

export default function EditBlogForm (props: TEditBlogFormProps) {
    const { toastHandle } = useToastSuccess();
    const { modal, modalHandler } = useModal();
    const { editBlog } = BlogApi();

    const {
        content,
        image,
        title,
        id,
    } = props;

    const {
        contentHandler,
        imageHandler,
        titleHandler,
        data,
    } = useBlogForm();

    const { mutate: mutateBlog } = useMutation({
        mutationFn: (datas: TBlogs) => editBlog(id, datas),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blog', { id }] });
            toastHandle('Blog updated!');
        },
    });

    const formButtonHandler = () => {
        mutateBlog({
            content: data.content ? data.content : content,
            title: data.title ? data.title : title,
            image: data.image ? data.image : image,
        });
        modalHandler();
    };

    return (
        <>
            {modal && <Modal onClick={ modalHandler }>
                <Form label='Edit blog'>
                    <Input
                        label='image'
                        name='image'
                        placeholder='Enter image URL'
                        required={ true }
                        inputHandler={ imageHandler }
                        initialValue={ image }
                    />
                    <Input
                        label='title'
                        name='title'
                        placeholder='Enter blog title'
                        required={ true }
                        inputHandler={ titleHandler }
                        initialValue={ title }
                    />
                    <TextArea
                        label='content'
                        name='content'
                        required={ true }
                        rows={ 10 }
                        inputHandler={ contentHandler }
                        initialValue={ content }
                    />
                    <Button
                        label='edit'
                        type='button'
                        onClick={ formButtonHandler }
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
