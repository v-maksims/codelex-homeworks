import style from '../styles/LogItem.module.scss';

type TLogItemProps = {
    gameId: number,
    win: string,
    name: string,
    userChoice: string,
    computerChoice: string,
    time: string
}

export default function LogsItem (props: TLogItemProps) {
    const {
        computerChoice,
        gameId,
        name,
        time,
        userChoice,
        win,
    } = props;

    return (
        <>
            <div className={ style.logWrap }>
                <span className={ style.log }>{gameId}</span>
                <span className={ style.log }>{name}</span>
                <span className={ style.log }>{userChoice}</span>
                <span className={ style.log }>{computerChoice}</span>
                <span className={ style.log }>{win}</span>
                <span className={ style.log }>{time}</span>
            </div>
        </>
    );
}
