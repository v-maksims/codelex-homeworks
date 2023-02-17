import { useMutation } from '@tanstack/react-query';
import TodoAPI from '../../API/TodoAPI';
import { queryClient } from '../../main';
import useToasts from './useToasts';

export default function useTodoItemMutate () {
    const { updateIsDone, deleteTodo } = TodoAPI();
    const { toastSuccesHandler, toastErrorHandler } = useToasts();
    const { mutate: mutateCheck } = useMutation({
        mutationFn: updateIsDone,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    const { mutate: mutateDelete } = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            toastSuccesHandler('Todo deleted!', 2000, 'bottom-center');
        },
        onError: () => toastErrorHandler('Something went wrong!', 2000, 'bottom-center'),
    });

    return {
        mutateCheck,
        mutateDelete,
    };
}
