import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';
import GameButton from '../components/GameButton';
import Card from '../components/Card';
import style from '../styles/GamePage.module.scss';
import useRPS from '../hooks/useRPS';
import Button from '../components/Button';

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
        started,
        startHandler,
    } = useRPS();

    return (
        <>
            {!started
                && <div className={ style.start }>
                    <Button
                        label='start game'
                        type='button'
                        onClick={ startHandler }
                    />
                </div>
            }
            {started && <div className={ style.gameWrap }>
                <div className={ style.toner }/>
                <img className={ style.backgroundImage } src="http://localhost:3004/static/background.gif" alt="bg-gif" />
                <div className={ style.game }>
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
                        <GameButton
                            choice='rock'
                            onClick={ setChoice }
                            gameIco={ <GiRock size='4rem'/> }
                        />
                        <GameButton
                            choice='paper'
                            onClick={ setChoice }
                            gameIco={ <GiPaper size='4rem'/> }
                        />
                        <GameButton
                            choice='scissors'
                            onClick={ setChoice }
                            gameIco={ <GiScissors size='4rem'/> }
                        />
                    </div>
                </div>
            </div>}
        </>
    );
}
