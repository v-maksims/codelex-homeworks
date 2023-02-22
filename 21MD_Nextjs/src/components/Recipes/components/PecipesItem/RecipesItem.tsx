import Image from 'next/image';
import style from './RecipesItem.module.scss';
import { TRecipe } from '@/slices/recipesSlice';

type TRecipesItemProps = Omit<TRecipe, '_id' | 'ingredients' | 'recipe'>

export default function RecipesItem (props: TRecipesItemProps) {
    const {
        image,
        title,
    } = props;

    return (
        <div className={style.cardWrap}>
            <Image
                src={image}
                alt={title}
                fill
            />
            <span
                className={style.title}
            >
                {title}
            </span>
        </div>
    );
}
