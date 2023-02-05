import Button from '../components/Button';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useEpisodes from '../hooks/useEpisodes';
import { TEpisode } from '../types/Episode';
import style from '../styles/pageWithCards.module.scss';
import EpisodeCard from '../components/EpisodeCard';

export default function EpisodePage() {
    const {
        cards,
        error,
        isLoading,
        status,
        pageCountAddHandler,
        pageCountSubHandler,
        page
    } = useEpisodes();

    return(
        <>
            <div className={style.cardsList}>
                {isLoading && <Loading/>}
                {error && <Error/> }
                {status === 'success' && cards?.data.results.map((card: TEpisode) => <EpisodeCard key={card.id} card={card}/>)}
            </div>
            <div className={style.btnWrap}>
                {page > 1 && <Button label='prev' onClick={pageCountSubHandler}/>}
                {(page < cards?.data.info.pages && !isLoading && !error) &&<Button label='next' onClick={pageCountAddHandler}/>}
            </div>
        </>
    );
}