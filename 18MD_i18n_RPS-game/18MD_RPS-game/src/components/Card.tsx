import style from '../styles/Card.module.scss';

type TCardProps ={
    playerName?: string,
    score: number
    // eslint-disable-next-line no-undef
    choiceIco: (element: string) => JSX.Element,
    choice:string,
}

export default function Card (props:TCardProps) {
    const {
        playerName,
        score,
        choiceIco,
        choice,
    } = props;

    return (
        <div className={ style.element }>
            <span className={ style.elementPlayer }>{playerName || 'Cyber Capybara'}</span>
            <div className={ style.underline }/>
            <div className={ playerName === 'Computer' ? style.computerElement : '' }>{choiceIco(choice)}</div>
            <div className={ style.underline }/>
            <span className={ style.score }>score: {score}</span>
        </div>
    );
}
