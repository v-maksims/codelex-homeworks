import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import style from './RecipeLayout.module.scss';

type TRecipeLayoutProps = {
    children: React.ReactNode
}

export default function RecipeLayout ({ children }: TRecipeLayoutProps) {
    return (
        <>
            <main>
                {children}
                <div className={style.buttonsWrap}>
                    {/* <Button label='Prev' type='button'/> */}
                    <Link href={'/recipes'}>
                        <Button label='Back to all recipes' type='button'/>
                    </Link>
                    {/* <Button label='Next' type='button'/> */}
                </div>
            </main>
        </>
    );
}
