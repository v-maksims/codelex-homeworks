import { useQuery } from '@tanstack/react-query';
import { charactersApi } from '../../api/API';


export default function useCharacterDetailsURL(url:string, id: number){
    
    const {data, status} = useQuery({
        queryKey: ['url character episode', {id}],
        queryFn: () => charactersApi.getByUrl(url)
    });

    return {
        data,
        status
    };

}