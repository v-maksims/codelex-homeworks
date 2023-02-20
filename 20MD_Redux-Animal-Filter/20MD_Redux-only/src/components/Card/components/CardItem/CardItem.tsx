import { deleteAnimal } from '../../../../store/animalSlice';
import { useAppDispatch } from '../../../../store/storeHooks';
import Button from '../../../Button/Button';
import style from './CardItem.module.scss';

type TCardItemProps = {
    image: string;
    name: string;
    species: string;
    id: number
}

export default function CardItem (props: TCardItemProps) {
    const {
        image,
        name,
        species,
        id,
    } = props;
    const dispatch = useAppDispatch();
    return (
        <div className={style.cardWrap}>
            <Button
                type='button'
                label='X'
                onClick={() => dispatch(deleteAnimal(id))}
            />
            <img className={style.image} src={image} />
            <span className={style.text}>{name}</span>
            <span className={style.text}>{species}</span>
        </div>
    );
}
