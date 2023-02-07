import { Link } from 'react-router-dom';
import style from '../styles/BlogCard.module.scss';

type TBlogCardProps = {
    id: number,
    image: string,
    title: string,
    content: string
}

export default function BlogCard (props: TBlogCardProps) {
    const {image,id,title,content} = props;
    return(
        <Link to={`/blogs/${id}`}>
            <div className={style.cardWrap}>
                <img className={style.image} src={image}/>
                <span className={style.title}>{title}</span>
                <span className={style.content}>{content}</span>
                <span className={style.readMore}>read more</span>
            </div>
        </Link>
    );
}