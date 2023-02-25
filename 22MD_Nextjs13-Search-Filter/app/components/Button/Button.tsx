import styles from './Button.module.scss';

type TButtonProps = {
    type: 'button' | 'submit';
    onClick?: () => void;
    label: string;
    disabled?: boolean;
}

const Button = (props: TButtonProps) => {
    const {
        label,
        onClick,
        type,
        disabled,
    } = props;

    return (
        <>
            <button
                className={styles.button}
                type={type}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    );
};

export default Button;
