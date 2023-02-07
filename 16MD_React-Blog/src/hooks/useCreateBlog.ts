import { useMutation } from '@tanstack/react-query';
import BlogApi from '../api/BlogApi';
import { queryClient } from '../main';

export default function useCreateBlog () {

    const {createBlog} = BlogApi();
    const {mutate} = useMutation({
        mutationFn: createBlog,
        onSuccess: () => {queryClient.invalidateQueries(
            {queryKey:['blogs']}
        );}
    });

    return {mutate};
}
