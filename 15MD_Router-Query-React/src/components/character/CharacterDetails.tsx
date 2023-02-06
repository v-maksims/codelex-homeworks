import EpisodeCard from '../episode/EpisodeCard';

import useCharacterDetailsURL from '../../hooks/characters/useCharacterDetailsURL';

import { TDetailsProps } from '../../types/DetailsPropsURLs';

export default function CharacterDetails({urls}:TDetailsProps){

    return (
        <>  
            {urls.map((url, index: number) =>{
                const {data,status} = useCharacterDetailsURL(url, index);
                if(status=== 'success' && data?.data){
                    return <EpisodeCard key={url} card={data?.data}/>;
                }
            })}
        </>
    );
}