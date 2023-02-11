import style from '../styles/Comment.module.scss';

type Tcomment = {
    comment: string,
}

export default function Comment (props:Tcomment) {
    const {
        comment,
    } = props;

    return (
        <div className={ style.commentWrap }>
            <span className={ style.comment }>{ comment }</span>
        </div>
    );
}
