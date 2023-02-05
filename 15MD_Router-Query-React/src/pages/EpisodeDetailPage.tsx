import { useParams } from 'react-router-dom';
import EpisodeDetails from '../components/EpisodeDetails';
import Error from '../components/Error';
import Loading from '../components/Loading';
import useEpisodeDetails from '../hooks/useEpisodeDetails';
import style from '../styles/pageWithCards.module.scss';

export default function EpisodeDetailsPage() {
    const {id} = useParams();
    const {card,error,isLoading,status} = useEpisodeDetails(String(id));
    return (
        <>
            <h1>Total characters in {card?.data.name}: {card?.data.characters.length}</h1>
            <div className={style.cardsList}>
                <>
                    {isLoading && <Loading/>}
                    {error && <Error/> }
                    {status === 'success' && <EpisodeDetails key={card?.data.id} urls={card?.data.characters}/>}
                </>
            </div>
        </>
    );
}