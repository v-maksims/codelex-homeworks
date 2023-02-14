import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';
import Button from '../components/Button';
import Card from '../components/Card';
import style from '../styles/GamePage.module.scss';
import useRPS from '../hooks/useRPS';

type TGamePageProps = {
    name: string
}

export default function GamePage ({ name }:TGamePageProps) {
    const {
        setIcon,
        userChoice,
        userScore,
        computerChoice,
        computerScore,
        setChoice,
    } = useRPS();

    return (
        <div className={ style.gameWrap }>
            <div className={ style.toner }/>
            <img className={ style.backgroundImage } src="http://localhost:3004/static/background.gif" alt="bg-gif" />
            <div className={ style.game }>
                <h2 className={ style.title }>Rock Paper Scissors</h2>
                <div className={ style.elementWrap }>
                    <Card
                        playerName={ name }
                        score={ userScore }
                        choice={ userChoice }
                        choiceIco={ setIcon }
                    />
                    <Card
                        playerName='Computer'
                        score={ computerScore }
                        choice={ computerChoice }
                        choiceIco={ setIcon }
                    />
                </div>
                <span className={ style.btnText }>Choice:</span>
                <div className={ style.btnWrap }>
                    <Button
                        choice='rock'
                        onClick={ setChoice }
                        gameIco={ <GiRock size='4rem'/> }
                    />
                    <Button
                        choice='paper'
                        onClick={ setChoice }
                        gameIco={ <GiPaper size='4rem'/> }
                    />
                    <Button
                        choice='scissors'
                        onClick={ setChoice }
                        gameIco={ <GiScissors size='4rem'/> }
                    />
                </div>
            </div>
        </div>
    );
}
