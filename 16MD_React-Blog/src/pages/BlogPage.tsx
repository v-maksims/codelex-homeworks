import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import BlogApi from '../api/BlogApi';
import { TBlogs } from '../types/Blogs';

export default function BlogPage () {
    const {blogId} = BlogApi();
    const {id} =useParams();
    // console.log(id);
    const {data, isLoading} = useQuery<TBlogs>(['blog', {id}],() => blogId(String(id)));

    if(isLoading){
        return <h1>Loading...</h1>;
    }

    if(!data){
        return <h1>Error..</h1>;
    }

    const {title} = data;
    
    return(
        <div>
            {title}
        </div>
    );
}