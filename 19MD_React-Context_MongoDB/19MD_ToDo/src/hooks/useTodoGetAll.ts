import { useQuery } from '@tanstack/react-query';
import TodoAPI from '../API/TodoAPI';

export default function useTodoGetAll () {
    const { getTodo } = TodoAPI();

    const { data: allTodo, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodo,
    });

    return {
        allTodo,
        isLoading,
    };
}
