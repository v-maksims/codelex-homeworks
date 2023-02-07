import axios from 'axios';
import {TBlogs} from '../types/Blogs';

export default function BlogApi (){
    const dbURL = 'http://localhost:3004';
    axios.defaults.baseURL = dbURL;

    const blogAll = async () =>{
        const{data} = await axios.get('/blogs');
        return data;
    };

    const blogId = async (id: string) =>{
        const{data} = await axios.get<TBlogs>(`/blogs/${id}`);
        return data;
    };

    const createBlog = (data:TBlogs) => {
        return axios.post('/blogs',data);
    };

    return {
        blogAll,
        blogId,
        createBlog
    };
}
