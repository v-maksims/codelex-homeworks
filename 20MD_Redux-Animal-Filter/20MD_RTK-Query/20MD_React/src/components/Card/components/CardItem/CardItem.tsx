import { useDeleteAnimalMutation } from '../../../../store/animalAPISlice';
import Button from '../../../Button/Button';
import style from './CardItem.module.scss';

type TCardItemProps = {
    image: string;
    name: string;
    species: string;
    id: string
}

export default function CardItem (props: TCardItemProps) {
    const {
        image,
        name,
        species,
        id,
    } = props;
    const [deleteCard] = useDeleteAnimalMutation();
    return (
        <div className={style.cardWrap}>
            <Button
                label='X'
                type='button'
                onClick={() => deleteCard(id)}
            />
            <img className={style.image} src={image} />
            <span className={style.text}>{name}</span>
            <span className={style.text}>{species}</span>
        </div>
    );
}
