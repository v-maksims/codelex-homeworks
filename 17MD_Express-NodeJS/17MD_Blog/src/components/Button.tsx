import style from '../styles/Button.module.scss';

type TButtonsProps = {
    label: string,
    onClick?:() => void,
    type: 'submit' | 'button',
}

export default function Button (props: TButtonsProps) {
    const {
        label,
        onClick,
        type = 'button',
    } = props;

    return (
        <button
            className={ style.button }
            onClick={ onClick }
            type={ type }
        >
            {label}
        </button>
    );
}
