import { useMutation } from '@tanstack/react-query';
import TodoAPI from '../API/TodoAPI';
import { useTodoAddContext } from '../context/TodoAddContext';
import { queryClient } from '../main';
import useToasts from './useToasts';

export default function useTodoAdd () {
    const { toastErrorHandler, toastSuccesHandler } = useToasts();
    const { postTodo } = TodoAPI();

    const { setTodoInfo, todoInfo } = useTodoAddContext();

    const { mutate } = useMutation({
        mutationFn: postTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            toastSuccesHandler('New todo added!', 3500, 'bottom-center');
        },
        onError: () => toastErrorHandler('Something went wrong', 3500, 'bottom-center'),
    });

    return {
        setTodoInfo,
        todoInfo,
        mutate,
    };
}
