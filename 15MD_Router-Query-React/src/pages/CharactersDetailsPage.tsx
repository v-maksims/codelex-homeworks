import { useParams } from 'react-router-dom';

import useCharacter from '../hooks/characters/useCharacter';

import CharacterDetails from '../components/character/CharacterDetails';
import Error from '../components/Error';
import Loading from '../components/Loading';

import style from '../styles/PageWithCards.module.scss';


export default function CharactersDetailsPage(){
    const {id} = useParams();
    const {
        error, 
        isLoading, 
        characterID,
        characterName,
        characterURLs,
        characterURLsLength 
    } = useCharacter(String(id));
    return(
        <>
            <h1>Total episodes with {characterName}: {characterURLsLength}</h1>
            <div className={style.cardsList}>
                <>
                    {isLoading && <Loading/>}
                    {error && <Error/> }
                    {characterURLs && <CharacterDetails key={characterID} urls={characterURLs} /> }
                </>
            </div>
        </>
    );
}