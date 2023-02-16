/* eslint-disable max-len */
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gameInfo from '../api/gameInfo';
import Button from '../components/Button';
import InfoItem from '../components/InfoItem';
import LogsItem from '../components/LogItem';
import style from '../styles/StaticPage.module.scss';

export default function StaticPage () {
    const [winRate, setWinRate] = useState(false);
    const [top, setTop] = useState(false);
    const [logs, setLogs] = useState(false);
    const navigate = useNavigate();

    const { winRateInfo, logsInfo, topInfo } = gameInfo();

    const { data: winRateData, isLoading: winRateLoading } = useQuery({
        queryKey: ['winRate'],
        queryFn: winRateInfo,
    });
    const { data: topData, isLoading: topLoading } = useQuery({
        queryKey: ['top'],
        queryFn: topInfo,
    });
    const { data: logsData, isLoading: logsLoading } = useQuery({
        queryKey: ['logs'],
        queryFn: logsInfo,
    });

    const winRateHandler = () => {
        setWinRate(!winRate);
        setTop(false);
        setLogs(false);
    };
    const topHandler = () => {
        setTop(!top);
        setWinRate(false);
        setLogs(false);
    };

    const logsHandler = () => {
        setLogs(!logs);
        setTop(false);
        setWinRate(false);
    };

    if (winRateLoading || topLoading || logsLoading) {
        return <h1>Loading...</h1>;
    }

    if (!winRateData || !logsData || !topData) {
        navigate('/');
    }

    return (
        <div className={ style.pageWrap }>
            <div className={ style.buttons }>
                <Button
                    label='win rates'
                    type='button'
                    onClick={ winRateHandler }
                />
                <Button
                    label='TOP 10'
                    type='button'
                    onClick={ topHandler }
                />
                <Button
                    label='logs'
                    type='button'
                    onClick={ logsHandler }
                />
            </div>
            <div className={ style.tables }>
                {winRate && <div className={ style.winrateWrap }>
                    {winRateData?.map(({ count, winStatus }, i) => <InfoItem key={ i } count={ count } title={ winStatus }/>)}
                </div>}
                {top && <div className={ style.topWrap }>
                    <>
                        {topData!.map(({ name, wins }, i) => <InfoItem key={ i } count={ wins } title={ name } />)}
                    </>
                </div>}
                {logs && <div className={ style.logsWrap }>
                    <>
                        <div className={ style.logsProp }>
                            <span>game id:</span>
                            <span>user name:</span>
                            <span>user choice:</span>
                            <span>computer choice:</span>
                            <span>winner:</span>
                            <span>time:</span>
                        </div>
                        {logsData?.map(({
                            computerChoice, gameID, name, time, userChoice, win,
                        }, i) => <LogsItem key={ i } computerChoice={ computerChoice } gameId={ gameID } name={ name } time={ time } userChoice={ userChoice } win={ win } />)}
                    </>
                </div>}
            </div>
        </div >
    );
}
