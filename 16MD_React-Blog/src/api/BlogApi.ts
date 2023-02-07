import axios from 'axios';
import {TBlogs} from '../types/Blogs';

export default function BlogApi (){
    const dbURL = 'http://localhost:3004/blogs';
    axios.defaults.baseURL = dbURL;

    const blogAll = async () =>{
        return await axios.get<TBlogs[]>('');
    };

    return {
        blogAll
    };
}
