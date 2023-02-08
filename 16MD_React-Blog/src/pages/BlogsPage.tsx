import { useQuery } from '@tanstack/react-query';
import { TBlogs } from '../types/Blogs';

import BlogCard from '../components/BlogCard';
import BlogApi from '../api/BlogApi';
import style from '../styles/BlogsPage.module.scss';

export default function BlogsPage () {
    const { blogAll } = BlogApi();
    const { data, isLoading } = useQuery<TBlogs[]>(['blogs'], blogAll);

    if (isLoading) {
        return <h1>Loading..</h1>;
    }

    if (!data) {
        return <h1>Error..</h1>;
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
