import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { TBlogs } from '../types/Blogs';

import BlogCard from '../components/BlogCard';
import BlogApi from '../api/BlogApi';
import style from '../styles/BlogsPage.module.scss';
import useToasts from '../hooks/useToasts';

export default function BlogsPage () {
    const { blogAll } = BlogApi();
    const { data, isLoading } = useQuery<TBlogs[]>(['blogs'], blogAll);
    const navigate = useNavigate();
    const { toastWarningHandler } = useToasts();

    if (isLoading) {
        return <h1>Loading..</h1>;
    }

    if (!data) {
        navigate('/');
        toastWarningHandler('Something went wrong!');
        return null;
    }

    return (
        <div className={ style.cardsWrap }>
            {data.map(({
                id, image, title, content,
            }) => <BlogCard
                key={ id }
                id={ Number(id) }
                image={ image }
                title={ title }
                content={ content }
            />)}
        </div>
    );
}
