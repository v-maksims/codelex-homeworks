import React from 'react';
import style from './RecipesList.module.scss';

type TRecipesListProps = {
    children: React.ReactNode
}

export default function RecipesList (props: TRecipesListProps) {
    const { children } = props;

    return (
        <div className={style.listWrap}>
            {children}
        </div>
    );
}
