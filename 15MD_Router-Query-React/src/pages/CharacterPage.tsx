import { useParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import Error from '../components/Error';
import Loading from '../components/Loading';
import useCharactersPage from '../hooks/useCharacter';
import style from '../styles/CharacterPage.module.scss';


export default function CharacterPage () {
    const {id} = useParams();
    const {card,error,isLoading,status} = useCharactersPage(String(id));
    return(
        <div className={style.card}>
            <>
                {isLoading && <Loading/>}
                {error && <Error/> }
                {status === 'success' &&<CharacterCard  key={card?.data.id} card={card?.data}/>}
            </>
        </div>
    );
}