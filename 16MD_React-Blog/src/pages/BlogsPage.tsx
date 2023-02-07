import { useQuery } from '@tanstack/react-query';
import BlogApi from '../api/BlogApi';
import BlogCard from '../components/BlogCard';


export default function BlogsPage () {
    const { blogAll } = BlogApi();
    const { data: blogs, isLoading, error }= useQuery({
        queryKey:['blogs'],
        queryFn: () => blogAll()
    });
    // console.log(blogs?.data[0].content);

    if(isLoading){
        return <h1>Loading..</h1>;
    }

    if(error){
        return <h1>Error..</h1>;
    }

    return(
        <div>
            {blogs?.data.map(blog => <BlogCard key={blog.id} />)}
        </div>
    );
}