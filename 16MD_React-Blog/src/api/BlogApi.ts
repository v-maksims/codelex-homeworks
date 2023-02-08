import axios from 'axios';
import {TBlogs} from '../types/Blogs';
import { TComments } from '../types/Comments';

export default function BlogApi (){
    const dbURL = 'http://localhost:3004';
    axios.defaults.baseURL = dbURL;

    const blogAll = async () =>{
        const{data} = await axios.get('/blogs');
        return data;
    };

    const blogId = async (id: string) =>{
        const{data} = await axios.get(`/blogs/${id}`);
        return data;
    };

    const blogCommentsId = async(id:string) => {
        const {data} = await axios.get(`/comments?blogId=${id}`);
        return data;
    };

    const createBlogComment = (data: TComments, id: string) => {
        return axios.post(`/comments?blogId=${id}`,data);
    };

    const createBlog = (data:TBlogs) => {
        return axios.post('/blogs',data);
    };

    return {
        blogAll,
        blogId,
        createBlog,
        blogCommentsId,
        createBlogComment
    };
}
