type TButtonsProps = {
    label: string,
    onClick:() => void,
    type: 'submit' | 'button', 
}

export default function Button (props: TButtonsProps) {
    const {
        label,
        onClick,
        type = 'button'
    } = props;

    return(
        <button
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    );
}