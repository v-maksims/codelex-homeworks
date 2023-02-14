import style from '../styles/Button.module.scss';

type TButtonProps = {
    type: 'button' | 'submit'
    label: string
    onClick: () => void
}

export default function Button (props: TButtonProps) {
    const {
        type,
        label,
        onClick,
    } = props;
    return (
        <>
            <button
                className={ style.button }
                type={ type }
                onClick={ onClick }
            >
                {label}
            </button>
        </>
    );
}
