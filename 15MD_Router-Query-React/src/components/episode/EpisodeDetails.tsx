import CharacterCard from '../character/CharacterCard';

import useEpisodeDetailsURL from '../../hooks/episodes/useEpisodeDetailsURL';

import { TDetailsProps } from '../../types/DetailsPropsURLs';

export default function EpisodeDetails({urls}:TDetailsProps){
    return (
        <>  
            {urls.map((url, index: number) =>{
                const {data,status} = useEpisodeDetailsURL(url, index);
                if(status=== 'success' && data?.data){
                    return <CharacterCard key={url} card={data?.data}/>;
                }
            })}
        </>
    );
}