import { useQuery } from '@tanstack/react-query';
import { charactersAPI } from '../api/API';

export default function useCharactersPage(id:string) {

    const { data: card, isLoading, error, status } = useQuery({
        queryKey: ['character', { id }],
        queryFn: () => charactersAPI.getById(+id),
    });


    return {
        isLoading,
        error,
        status,
        card
    };
}