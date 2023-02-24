import React from 'react';
import styles from './RecipesList.module.scss';

type TRecipesListProps = {
    children: React.ReactNode;
}

const RecipesList = ({ children }:TRecipesListProps) => (
    <div className={styles.listWrap}>
        {children}
    </div>
);

export default RecipesList;
