import style from '../styles/pageWithCards.module.scss';
import CharacterCard from '../components/CharacterCard';
import useCharactersPage from '../hooks/useCharacters';
import Button from '../components/Button';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { TCharacter } from '../types/Character';

export default function CharactersPage () {
    const {
        cards,
        error,
        isLoading,
        status,
        pageCountAddHandler,
        pageCountSubHandler, 
        page
    } = useCharactersPage();

    return(
        <>
            <div className={style.cardsList}>
                {isLoading && <Loading/>}
                {error && <Error/> }
                {status === 'success' && cards?.data.results.map((card: TCharacter) => <CharacterCard key={card.id} card={card}/>)}
            </div>
            <div className={style.btnWrap}>
                {page > 1 && <Button label='prev' onClick={pageCountSubHandler}/>}
                {(page < cards?.data.info.pages && !isLoading && !error) &&<Button label='next' onClick={pageCountAddHandler}/>}
            </div>
        </>
    );
}