import axios from 'axios';
import {TBlogs} from '../types/Blogs';

export default function BlogApi (){
    const dbURL = 'http://localhost:3004/blogs';
    axios.defaults.baseURL = dbURL;

    const blogAll = async () =>{
        const{data} = await axios.get('');
        return data;
    };

    const blogId = async (id: string) =>{
        const{data} = await axios.get<TBlogs>(`/${id}`);
        return data;
    };

    return {
        blogAll,
        blogId
    };
}
