import Image from 'next/image';
import styles from './RecipesItem.module.scss';

type TRecipesItemProps ={
    image: string;
    title: string;
}

const RecipesItem = (props: TRecipesItemProps) => {
    const { image, title } = props;

    return (
        <div className={styles.cardWrap}>
            <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
            />
            <span className={styles.title}>
                {title}
            </span>
        </div>
    );
};

export default RecipesItem;
