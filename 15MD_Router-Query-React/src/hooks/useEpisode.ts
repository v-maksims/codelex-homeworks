import { useQuery } from '@tanstack/react-query';
import { episodesApi } from '../api/API';

export default function useEpisode(id: string) {

        
    const { data: card, isLoading, error, status } = useQuery({
        queryKey: ['episode', { id }],
        queryFn: () => episodesApi.getById(+id),
    });



   
    return {
        isLoading,
        error,
        status,
        card,
    };
}