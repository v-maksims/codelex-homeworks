import style from '../styles/InfoItem.module.scss';

type TItemInfoProps = {
    title: string,
    count: number,
}

export default function InfoItem (props: TItemInfoProps) {
    const { count, title } = props;
    return (
        <>
            <div className={ style.textWrap }>
                <span className={ style.text }>{title}:</span>
                <span className={ style.text }>{count}</span>
            </div>
        </>
    );
}
