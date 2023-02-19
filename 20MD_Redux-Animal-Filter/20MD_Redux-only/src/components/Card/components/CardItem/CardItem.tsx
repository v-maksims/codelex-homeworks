import style from './CardItem.module.scss';

type TCardItemProps = {
    image: string;
    name: string;
    species: string;
}

export default function CardItem (props: TCardItemProps) {
    const { image, name, species } = props;
    return (
        <div className={style.cardWrap}>
            <img className={style.image} src={image} />
            <span className={style.text}>{name}</span>
            <span className={style.text}>{species}</span>
        </div>
    );
}
