import { useQuery } from '@tanstack/react-query';
import { charactersApi } from '../../api/API';

export default function useCharacter(id:string) {

    const { data: character, isLoading, error, status } = useQuery({
        queryKey: ['character', { id }],
        queryFn: () => charactersApi.getById(+id),
    });

    const characterID = character?.data.id;
    const characterData = character?.data;
    const characterURLs = character?.data.episode;
    const characterURLsLength = character?.data.episode.length;
    const characterName = character?.data.name;
    return {
        error,
        isLoading,
        characterID,
        characterURLs,
        characterURLsLength,
        characterName,
        characterData,
        status
    };
}