import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import BlogApi from '../api/BlogApi';
import { TBlogs } from '../types/Blogs';
import style from '../styles/BlogPage.module.scss';
import Comments from '../components/Comments';
import Comment from '../components/Comment';
import axios from 'axios';
import { TComments } from '../types/Comments';
import { queryClient } from '../main';

export default function BlogPage () {
    const {blogId,blogCommentsId} = BlogApi();
    const {id} =useParams();
    // console.log(id);
    const {data:blog, isLoading} = useQuery<TBlogs>(['blog', {id}],() => blogId(String(id)));
    const {data: comment} = useQuery<TComments[]>(['comments'], () => blogCommentsId(String(id)));
    const {mutate} = useMutation({
        mutationFn: (data:TComments) => {
            return axios.post(`/comments?blogId=${id}`,data);
        },
        onSuccess: () => {queryClient.invalidateQueries(
            {queryKey:['comments']}
        );}
        
    });
    if(isLoading){
        return <h1>Loading...</h1>;
    }

    if(!blog || !comment){
        return <h1>Error..</h1>;
    }

    const {title,image,content} = blog;
    console.log(comment);
    // const {} = comment;
    return(
        <>
            <div>
                <img className={style.image} src={image}/>
                <h1 className={style.title}>{title}</h1>
                <p className={style.text}>{content}</p>
            </div>
            <div>
                <span>Users comments({comment.length}):</span>
                <Comments>
                    {comment.map(({id, comment, userImage, user}) => <Comment 
                        key={id} 
                        image={userImage} 
                        comment={comment}
                        name={user}
                    />)}
                </Comments>
                <button
                    onClick={() =>{
                        mutate({
                            user: 'sadasd',
                            comment: 'asdasd12314',
                            userImage:'123',
                            blogId: 1
                        });
                    }}
                    type='button'
                >create</button>
            </div>
        </>
    );
}