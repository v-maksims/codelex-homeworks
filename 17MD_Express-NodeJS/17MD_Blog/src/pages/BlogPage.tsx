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
import Button from '../components/Button';

export default function BlogPage () {
    const { id } = useParams();
    const { createBlogComment, deleteBlog } = BlogApi();
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

    const { mutate: deletePost } = useMutation({
        mutationFn: () => deleteBlog(String(id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blog', id] });
            toastSuccesHandler('Blog deleted!');
            navigate('/blogs');
        },
        onError: () => toastErrorHandler('Blog didnt deleted'),
    });

    const clickHandler = () => {
        mutateComment({
            comment: value,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            blogId: +id!,
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

    // console.log(blog.);
    if (!blog) {
        return null;
    }

    const { title, image, content } = blog[0];

    return (
        <>
            <EditBlogForm
                title={ title }
                content={ content }
                id={ String(id) }
            />
            <Button
                label='delete post'
                type='button'
                onClick={ () => deletePost() }
            />
            <div>
                <img className={ style.image } src={ `http://localhost:3004${image}` }/>
                <h1 className={ style.title }>{ title}</h1>
                <p className={ style.text }>{ content}</p>
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
                        id, comment,
                    }: TComments) => <Comment
                        key={ id }
                        comment={ comment }
                    />)}
                </Comments>
            </div>
        </>
    );
}
