import style from '../styles/Comment.module.scss';

type Tcomment = {
    comment: string,
    image: string,
    name:string
}

export default function Comment (props:Tcomment) {
    const {comment,image,name} = props;
    return (
        <div className={style.commentWrap}>
            <img className={style.image} src={image} />
            <span className={style.comment}>{comment}</span>
            <span>{name}</span>
        </div>
    );
}