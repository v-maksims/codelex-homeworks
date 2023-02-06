import useEpisodes from '../hooks/episodes/useEpisodes';

import Button from '../components/Button';
import Loading from '../components/Loading';
import Error from '../components/Error';
import EpisodeCard from '../components/episode/EpisodeCard';

import style from '../styles/PageWithCards.module.scss';

export default function EpisodePage() {
    const {
        error,
        isLoading,
        pageCountAddHandler,
        pageCountSubHandler,
        page,
        pages,
        results
    } = useEpisodes();

    return(
        <>
            <div className={style.cardsList}>
                <>
                    {isLoading && <Loading/>}
                    {error && <Error/> }
                    {results && results.map((card) => <EpisodeCard key={card.id} card={card}/>)}
                </>
            </div>
            <div className={style.btnWrap}>
                {page > 1 && <Button label='prev' onClick={pageCountSubHandler}/>}
                {pages && ((page < pages && !isLoading && !error) && <Button label='next' onClick={pageCountAddHandler}/>)}
            </div>
        </>
    );
}