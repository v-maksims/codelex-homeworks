import useUrlApi from '../hooks/useUrlApi';
import CharacterCard from './CharacterCard';

type TEpisodeDetailsProps = {
    urls: string[]
}

export default function EpisodeDetails({urls}:TEpisodeDetailsProps){
    return (
        <>  
            {urls.map((url, index: number) =>{
                const {data,status} = useUrlApi(url, index);
                if(status=== 'success'){
                    return <CharacterCard key={url} card={data?.data}/>;
                }
            })}
        </>
    );
}