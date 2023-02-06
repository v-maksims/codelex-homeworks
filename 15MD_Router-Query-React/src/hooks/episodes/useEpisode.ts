import { useQuery } from '@tanstack/react-query';
import { episodesApi } from '../../api/API';

export default function useEpisode(id: string) {

    const { data: episode, isLoading, error, status } = useQuery({
        queryKey: ['episode', { id }],
        queryFn: () => episodesApi.getById(+id),
    });
   
    const episodeName = episode?.data.name;
    const episodeID = episode?.data.id;
    const charactersCount = episode?.data.characters.length;
    const characters = episode?.data.characters;


    return {
        isLoading,
        error,
        episodeName,
        episodeID,
        charactersCount,
        characters,
        status
    };
}