import axios from 'axios';
import { TComputer, TUser, TWinner } from '../types/sendType';

type TWinRateAPI = {
    winStatus: string,
    count: number,
}

type TTopAPI = {
    name: string,
    wins: number
}

type TLogsAPI = {
    gameID: number,
    win: string,
    name: string,
    userChoice: string,
    computerChoice: string,
    time: string,
}

export default function gameInfo () {
    axios.defaults.baseURL = 'http://localhost:3004';

    const userInfo = (data:TUser) => {
        axios.post('/user-info', data);
    };

    const computerInfo = (data:TComputer) => {
        axios.post('/computer-info', data);
    };

    const winnerInfo = (data:TWinner) => {
        axios.post('/winner-info', data);
    };

    const logsInfo = () => axios.get<TLogsAPI[]>('/logs').then(({ data }) => data);

    const topInfo = () => axios.get<TTopAPI[]>('/top-10').then(({ data }) => data);

    const winRateInfo = () => axios.get<TWinRateAPI[]>('/win-static').then(({ data }) => data);

    return {
        userInfo,
        computerInfo,
        winnerInfo,
        winRateInfo,
        topInfo,
        logsInfo,
    };
}
