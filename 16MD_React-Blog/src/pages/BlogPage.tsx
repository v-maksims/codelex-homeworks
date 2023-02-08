import { useMutation, useQueries, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import BlogApi from '../api/BlogApi';
import { TBlogs } from '../types/Blogs';
import style from '../styles/BlogPage.module.scss';
import Comments from '../components/Comments';
import Comment from '../components/Comment';
import axios from 'axios';
import { TComments } from '../types/Comments';
import { queryClient } from '../main';
import { useRef, useState } from 'react';

export default function BlogPage () {
    const {id} =useParams();
    const {blogId,blogCommentsId} = BlogApi();
    const [value, setValue]=useState('');
    const commentHandler= (val: string) => {
        setValue(val);
    };

    const [{data: blog, isLoading: loadBlog}, {data: comments,isLoading: loadComments}] = useQueries({
        queries: [
            {
                queryKey: ['blog', {id}],
                queryFn: () => blogId(String(id))
            },
            {
                queryKey: ['comments',{id}],
                queryFn: () => blogCommentsId(String(id))
            }
        ]
    });

    const {mutate} = useMutation({
        mutationFn: (data:TComments) => {
            return axios.post(`/comments?blogId=${id}`,data);
        },
        onSuccess: () => {queryClient.invalidateQueries(
            {queryKey:['comments']}
        );}
        
    });

    const createNewComment = (val: string, id: string) => {
        mutate({
            comment:val,
            user:'Anonymous',
            userImage:'https://goo.su/gafk',
            blogId: +id,
        });
    };

    const clearArea = () => {
        setValue('');
    };

    const clickHandler = () =>{
        createNewComment(value,id!);
        clearArea();
    };

    if(loadBlog && loadComments){
        return <h1>Loading...</h1>;
    }

    if(!blog || !comments){
        return <h1>Error..</h1>;
    }

    const {title,image,content} = blog;
    // console.log(comment);


    return(
        <>
            <div>
                <img className={style.image} src={image}/>
                <h1 className={style.title}>{title}</h1>
                <p className={style.text}>{content}</p>
            </div>
            <div>
                <span>Users comments({comments.length}):</span>
                <Comments
                    commentHandler={commentHandler}
                    clickHandler={clickHandler}
                >
                    {comments.map(({id, comment, userImage, user}: TComments) => <Comment 
                        key={id} 
                        image={userImage} 
                        comment={comment}
                        name={user}
                    />)}
                </Comments>
            </div>
        </>
    );
}