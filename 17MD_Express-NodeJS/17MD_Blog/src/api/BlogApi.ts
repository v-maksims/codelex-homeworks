import axios from 'axios';
import { TBlogs } from '../types/Blogs';
import { TComments } from '../types/Comments';

export default function BlogApi () {
    const dbURL = 'http://localhost:3004';
    axios.defaults.baseURL = dbURL;

    const blogAll = async () => {
        const { data } = await axios.get('/blogs');
        return data;
    };

    const blogId = async (id: string) => {
        const { data } = await axios.get<TBlogs[]>(`/blogs/${id}`);
        return data;
    };

    const createBlog = (data:TBlogs) => axios.post('/blogs', data);

    const editBlog = (id: string, data: TBlogs) => axios.put(`/blogs/${id}`, data);

    const blogCommentsId = async (id:string) => {
        const { data } = await axios.get(`/comments/${id}`);
        return data;
    };

    const createBlogComment = (data: TComments, id: string) => axios.post(`/comments/${id}`, data);

    const deleteBlog = (id: string) => axios.delete(`/blogs/${id}`);

    const uploadBlogImage = (formData: FormData) => axios.post('/upload-image', formData);

    return {
        blogAll,
        blogId,
        createBlog,
        blogCommentsId,
        createBlogComment,
        editBlog,
        deleteBlog,
        uploadBlogImage,
    };
}
