import { useQuery } from '@tanstack/react-query';
import { episodeDetails } from '../api/API';


export default function useUrlApi(url:string, id: number){
    
    const {data, status} = useQuery({
        queryKey: ['url api', {id}],
        queryFn: () => episodeDetails.getByUrl(url)
    });

    return {
        data,
        status
    };

}