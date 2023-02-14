import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';
import { useEffect } from 'react';
import GameButton from '../components/GameButton';
import Card from '../components/Card';
import style from '../styles/GamePage.module.scss';
import useRPS from '../hooks/useRPS';
import Button from '../components/Button';
import gameInfo from '../api/gameInfo';

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
        count,
        winner,
    } = useRPS();

    const { computerInfo, userInfo, winnerInfo } = gameInfo();

    useEffect(() => {
        const date = new Date();
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        if (count) {
            computerInfo({ computerChoice, time });
            userInfo({ name: name || 'Cyber Capybara', time, userChoice });
            winnerInfo({ winner });
        }
    }, [count]);

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
                    <span className={ style.text }>Choice:</span>
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
                    <span className={ style.text }>Move count: {count}</span>
                </div>
            </div>}
        </>
    );
}
