import axios from 'axios';
import { TComputer, TUser, TWinner } from '../types/sendType';

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

    return {
        userInfo,
        computerInfo,
        winnerInfo,
    };
}
