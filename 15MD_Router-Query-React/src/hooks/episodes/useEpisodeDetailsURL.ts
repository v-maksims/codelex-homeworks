import { useQuery } from '@tanstack/react-query';
import { episodesApi } from '../../api/API';


export default function useEpisodeDetailsURL(url:string, id: number){
    
    const {data, status} = useQuery({
        queryKey: ['url api', {id}],
        queryFn: () => episodesApi.getByUrl(url)
    });

    return {
        data,
        status
    };

}