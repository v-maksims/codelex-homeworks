import { useParams } from 'react-router-dom';

import useEpisode from '../hooks/episodes/useEpisode';

import EpisodeDetails from '../components/episode/EpisodeDetails';
import Error from '../components/Error';
import Loading from '../components/Loading';

import style from '../styles/PageWithCards.module.scss';

export default function EpisodeDetailsPage() {
    const {id} = useParams();
    const {
        error,
        isLoading,
        characters,
        charactersCount,
        episodeID,
        episodeName
    } = useEpisode(String(id));
    return (
        <>
            <h1>Total characters in &apos;{episodeName}&apos;: {charactersCount}</h1>
            <div className={style.cardsList}>
                <>
                    {isLoading && <Loading/>}
                    {error && <Error/> }
                    {characters && <EpisodeDetails key={episodeID} urls={characters}/>}
                </>
            </div>
        </>
    );
}