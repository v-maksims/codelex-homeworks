import style from '../styles/AboutPage.module.scss';

type TAboutProps = {
    title: string,
    textOne: string,
    textTwo: string,
    textThree: string,
    textFour: string,
    image:string
}

export default function About(props:TAboutProps) {
    const {
        title,
        textOne,
        textThree,
        textTwo,
        textFour,
        image
    } = props;

    return (
        <>
            <h1 className={style.title}>{title}</h1>
            <p className={style.text}>{textOne}</p>
            <p className={style.text}>{textTwo}</p>
            <p className={style.text}>{textThree}</p>
            <p className={style.text}>{textFour}</p>
            <img className={style.image} src={image}/>
        </>
    );
}