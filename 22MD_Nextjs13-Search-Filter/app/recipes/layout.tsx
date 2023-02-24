import React from 'react';
import styles from './RecipesLayout.module.scss';

type TRecipesLayoutProps = {
    children: React.ReactNode;
}

const RecipesLayout = ({ children }:TRecipesLayoutProps) => (
    <main className={styles.recipesLayout}>
        {children}
    </main>
);

export default RecipesLayout;
