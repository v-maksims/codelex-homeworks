import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../main';
import { TComments } from '../types/Comments';

import Comments from '../components/Comments';
import Comment from '../components/Comment';
import EditBlogForm from '../components/EditBlogForm';

import useToasts from '../hooks/useToasts';
import useBlogPageQueries from '../hooks/useBlogPageQueries';
import useComments from '../hooks/useComments';

import style from '../styles/BlogPage.module.scss';
import BlogApi from '../api/BlogApi';

export default function BlogPage () {
    const { id } = useParams();
    const { createBlogComment } = BlogApi();
    const navigate = useNavigate();

    const {
        toastSuccesHandler,
        toastErrorHandler,
        toastWarningHandler,
    } = useToasts();
    const {
        clearArea,
        commentHandler,
        value,
    } = useComments();
    const {
        blog,
        comments,
        loadBlog,
        loadComments,
        errorBlog,
        errorComments,
    } = useBlogPageQueries(String(id));

    const { mutate: mutateComment } = useMutation({
        mutationFn: (data:TComments) => createBlogComment(data, String(id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments'] });
            toastSuccesHandler('Comment added!');
        },
        onError: () => toastErrorHandler('Error'),
    });

    const clickHandler = () => {
        mutateComment({
            comment: value,
            user: 'Anonymous',
            userImage: 'https://goo.su/gafk',
            blogId: +String(id),
        });
        clearArea();
    };

    if (loadBlog || loadComments) {
        return <h1>Loading...</h1>;
    }

    if (errorBlog || errorComments) {
        navigate('/');
        toastWarningHandler('Something went wrong');
        return null;
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
                    value={ value }
                    clickHandler={ clickHandler }
                    commentHandler={ commentHandler }

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
