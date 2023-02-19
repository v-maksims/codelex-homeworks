import React from 'react';
import SpeciesItem from '../SpeciesItem/SpeciesItem';
import style from './SpeciesList.module.scss';

type TSpeciesListProps = {
    children: React.ReactNode
    onClick: () => void
}

export default function SpeciesList ({ children, onClick }:TSpeciesListProps) {
    return (
        <div className={style.speciesListWrap}>
            <SpeciesItem
                onClick={onClick}
                species='all'
            />
            {children}
        </div>
    );
}
