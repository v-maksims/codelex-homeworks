import style from '../styles/Button.module.scss';

type TButtonProps = {
    label: string,
    onClick?: () => void,
    type?: 'button' | 'submit'
}

export default function Button(props: TButtonProps) {
    const {label, onClick, type= 'button'} = props;

    return(
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