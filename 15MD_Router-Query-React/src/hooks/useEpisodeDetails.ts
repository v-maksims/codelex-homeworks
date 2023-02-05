import { episodesApi } from '../api/API';
import { useQuery } from '@tanstack/react-query';

export default function useEpisodeDetails(id: string){
    const { data: card, isLoading, error, status } = useQuery({
        queryKey: ['episode details', { id }],
        queryFn: () => episodesApi.getById(+id),
    });


    return {
        isLoading,
        error,
        status,
        card
    };
}