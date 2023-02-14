import { IconType } from 'react-icons/lib';
import { useState } from 'react';
import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';
import useToasts from '../hooks/useToasts';
import useTranslateText from './useTranslateText';

type TElements = {
    [key: string]: {
        title: string,
        beats: string[]
    }
}

type setIcons = {
    [key: string] : IconType
}

export default function useRPS () {
    const { t } = useTranslateText();

    const [userChoice, setUserChoice] = useState('rock');
    const [computerChoice, setComputerChoice] = useState('rock');
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const { toastErrorHandler, toastSuccesHandler, toastWarningHandler } = useToasts();
    const [started, setStarted] = useState(false);
    const [count, setCount] = useState(0);
    const [winner, setWinner] = useState('');

    const elements:TElements = {
        rock: {
            title: 'rock',
            beats: ['scissors'],
        },
        paper: {
            title: 'paper',
            beats: ['rock'],
        },
        scissors: {
            title: 'scissors',
            beats: ['paper'],
        },
    };

    const computerChoiceGenerate = () => {
        const keys = Object.keys(elements);
        return elements[keys[Math.floor(Math.random() * keys.length)]].title;
    };

    const checkWinner = (user:string, computer:string) => {
        if (elements[user].beats.includes(computer)) {
            setWinner('user');
            toastSuccesHandler(t('userWin'), 800, 'bottom-center');
            return 1;
        }
        if (elements[computer].beats.includes(user)) {
            setWinner('computer');
            toastErrorHandler(t('computerWin'), 800, 'bottom-center');
            return -1;
        }
        toastWarningHandler(t('draw'), 800, 'bottom-center');
        setWinner('draw');
        return 0;
    };

    const changeScore = (result: number) => {
        if (result === 1) {
            return setUserScore(userScore + 1);
        }
        if (result === -1) {
            return setComputerScore(computerScore + 1);
        }
        return 0;
    };

    const setChoice = (choice: string) => {
        const newComputer = computerChoiceGenerate();
        setUserChoice(choice);
        setComputerChoice(newComputer);
        changeScore(checkWinner(choice, newComputer));
        setCount(count + 1);
    };

    const setIcon = (element:string) => {
        const icons:setIcons = {
            rock: GiRock,
            paper: GiPaper,
            scissors: GiScissors,
        };
        const Icon = icons[element];
        return (<Icon size='8rem'/>);
    };

    const startHandler = () => {
        setStarted(true);
    };

    return {
        userScore,
        userChoice,
        setIcon,
        computerChoice,
        computerScore,
        setChoice,
        started,
        startHandler,
        count,
        winner,
    };
}
