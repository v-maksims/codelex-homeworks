import { IconType } from 'react-icons/lib';
import style from '../styles/Button.module.scss';

type TButtonProps = {
    choice: string,
    onClick: (choice: string) => void,
    gameIco: IconType,
}

export default function Button (props:TButtonProps) {
    const { gameIco, onClick, choice } = props;
    return (
        <>
            <button
                className={ style.button }
                type='button'
                onClick={ () => onClick(choice) }
            >
                <>
                    {gameIco}
                </>
            </button>
        </>
    );
}
