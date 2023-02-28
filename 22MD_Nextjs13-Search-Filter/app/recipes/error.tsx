'use client';

import { useEffect } from 'react';
import Button from '../components/Button/Button';
import styles from './ErrorRecipes.module.scss';

type TErrorRecipesProps = {
    error: Error;
    reset: () => void;
}

export default function ErrorRecipes ({ error, reset }:TErrorRecipesProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className={styles.errorWrap}>
            <h2 className={styles.errorText}>Something went wrong!</h2>
            <span className={styles.errorMessage}>
                {error.message}
            </span>
            <Button
                label='Try again'
                type='button'
                onClick={reset}
            />
        </div>
    );
}
