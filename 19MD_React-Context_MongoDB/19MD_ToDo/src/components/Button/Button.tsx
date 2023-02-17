import style from './Button.module.scss';

type TButtonProps = {
    label: string;
    onClick?: () => void;
    type: 'submit' | 'button'
}

export default function Button (props: TButtonProps) {
    const { label, onClick, type } = props;

    return (
        <>
            <button
                className={style.button}
                type={type}
                onClick={onClick}
            >
                {label}
            </button>
        </>
    );
}
