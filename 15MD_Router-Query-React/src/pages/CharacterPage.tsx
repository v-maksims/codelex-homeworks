import { useParams } from 'react-router-dom';

import useCharacter from '../hooks/characters/useCharacter';

import CharacterCard from '../components/character/CharacterCard';
import Error from '../components/Error';
import Loading from '../components/Loading';

import style from '../styles/CharacterPage.module.scss';


export default function CharacterPage () {
    const {id} = useParams();
    const {
        error,
        isLoading,
        status, 
        characterData,
        characterID
    } = useCharacter(String(id));
    
    return(
        <div className={style.card}>
            <>
                {isLoading && <Loading/>}
                {error && <Error/> }
                {characterData && (status === 'success' &&<CharacterCard  key={characterID} card={characterData}/>)}
            </>
        </div>
    );
}