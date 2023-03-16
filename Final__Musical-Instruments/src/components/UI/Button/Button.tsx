import styles from './Button.module.scss';

type TButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    type: 'button' | 'submit'
}

const Button = (props: TButtonProps) => {
    const {
        label,
        onClick,
        type,
        disabled,
    } = props;

    return (
        <button
            className={styles.button}
            onClick={onClick}
            type={type}
            disabled ={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
