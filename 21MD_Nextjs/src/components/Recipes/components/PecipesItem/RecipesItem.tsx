import Image from 'next/image';
import style from './RecipesItem.module.scss';

type TRecipesItemProps = {
    image: string;
    title: string;
}

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
