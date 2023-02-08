import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQueries } from '@tanstack/react-query';
import { queryClient } from '../main';
import { TComments } from '../types/Comments';

import Comments from '../components/Comments';
import Comment from '../components/Comment';
import EditBlogForm from '../components/EditBlogForm';

import useToastSuccess from '../hooks/useToastSuccess';
import style from '../styles/BlogPage.module.scss';
import BlogApi from '../api/BlogApi';

export default function BlogPage () {
    const { id } = useParams();
    const { blogId, blogCommentsId, createBlogComment } = BlogApi();
    const [value, setValue] = useState('');
    const { toastHandle } = useToastSuccess();

    const commentHandler = (val: string) => {
        setValue(val);
    };

    const [
        { data: blog, isLoading: loadBlog },
        { data: comments, isLoading: loadComments },
    ] = useQueries({
        queries: [
            {
                queryKey: ['blog', { id }],
                queryFn: () => blogId(String(id)),
            },
            {
                queryKey: ['comments', { id }],
                queryFn: () => blogCommentsId(String(id)),
            },
        ],
    });

    const { mutate: mutateComment } = useMutation({
        mutationFn: (data:TComments) => createBlogComment(data, String(id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments'] });
            toastHandle('Comment added!');
        },
    });

    const createNewComment = (val: string, ID: string) => {
        mutateComment({
            comment: val,
            user: 'Anonymous',
            userImage: 'https://goo.su/gafk',
            blogId: +ID,
        });
    };

    const clearArea = () => {
        setValue('');
    };

    const clickHandler = () => {
        createNewComment(value, id!);
        clearArea();
    };

    if (loadBlog && loadComments) {
        return <h1>Loading...</h1>;
    }

    if (!blog) {
        return <h1>Blog section error...</h1>;
    }

    if (!comments) {
        return <h1>Comments section error...</h1>;
    }

    const { title, image, content } = blog;

    return (
        <>
            <EditBlogForm
                title={ title }
                image={ image }
                content={ content }
                id={ String(id) }
            />
            <div>
                <img className={ style.image } src={ image }/>
                <h1 className={ style.title }>{title}</h1>
                <p className={ style.text }>{content}</p>
            </div>
            <div>
                <span>Users comments({comments.length}):</span>
                <Comments
                    commentHandler={ commentHandler }
                    clickHandler={ clickHandler }
                >
                    {comments.map(({
                        // eslint-disable-next-line no-shadow
                        id, comment, userImage, user,
                    }: TComments) => <Comment
                        key={ id }
                        image={ userImage }
                        comment={ comment }
                        name={ user }
                    />)}
                </Comments>
            </div>
        </>
    );
}
