import style from './Button.module.scss';

type TButtonProps = {
    type: 'button' | 'submit';
    onClick?: () => void;
    label: string;
}

export default function Button (props: TButtonProps) {
    const { label, onClick, type } = props;
    return (
        <button
            className={style.button}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    );
}
