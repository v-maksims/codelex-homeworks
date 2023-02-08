import { useQueries } from '@tanstack/react-query';
import BlogApi from '../api/BlogApi';

export default function useBlogPageQueries (id: string) {
    const { blogId, blogCommentsId } = BlogApi();

    const [
        { data: blog, isLoading: loadBlog },
        { data: comments, isLoading: loadComments },
    ] = useQueries({
        queries: [
            {
                queryKey: ['blog', { id }],
                queryFn: () => blogId(String(id)),
            },
            {
                queryKey: ['comments', { id }],
                queryFn: () => blogCommentsId(String(id)),
            },
        ],
    });

    return {
        blog,
        comments,
        loadBlog,
        loadComments,
    };
}
