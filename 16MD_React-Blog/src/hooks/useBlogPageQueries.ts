import { useQueries } from '@tanstack/react-query';
import BlogApi from '../api/BlogApi';

export default function useBlogPageQueries (id: string) {
    const { blogId, blogCommentsId } = BlogApi();

    const [
        { data: blog, isLoading: loadBlog, error: errorBlog },
        { data: comments, isLoading: loadComments, error: errorComments },
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
        errorBlog,
        errorComments,
    };
}
