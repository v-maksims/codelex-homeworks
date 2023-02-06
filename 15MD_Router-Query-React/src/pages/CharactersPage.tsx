import { TCharacter } from '../types/Character';
import { Link } from 'react-router-dom';

import useCharacters from '../hooks/characters/useCharacters';

import CharacterCard from '../components/character/CharacterCard';
import Button from '../components/Button';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Input from '../components/Input';

import style from '../styles/PageWithCards.module.scss';

export default function CharactersPage () {
    const {
        error,
        isLoading,
        pageCountAddHandler,
        pageCountSubHandler, 
        page,
        pages,
        charactersResult,
        value,
        inputHandler
    } = useCharacters();

    return(
        <>
            <div className={style.search}>
                <span className={style.searchText}>Search character by ID:</span>             
                <Input
                    type='number'
                    placeholder='Enter character ID'
                    value={value}
                    onChange={inputHandler}
                />
                <Link to={`/characters/${value}`}>
                    <Button label='search'/>
                </Link>
            </div>
            <div className={style.cardsList}>
                <>
                    {isLoading && <Loading/>}
                    {error && <Error/> }
                    {charactersResult && charactersResult.map((card: TCharacter) => <CharacterCard key={card.id} card={card}/>)}
                </>
            </div>
            <div className={style.btnWrap}>
                {page > 1 && <Button label='prev' onClick={pageCountSubHandler}/>}
                {pages && (( !error && !isLoading && page < pages) &&<Button label='next' onClick={pageCountAddHandler}/>)}
            </div>
        </>
    );
}