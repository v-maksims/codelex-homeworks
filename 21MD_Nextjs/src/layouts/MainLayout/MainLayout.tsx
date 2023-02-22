import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import style from './MainLayout.module.scss';

type TMainLayoutProps = {
    children: React.ReactNode;
    title: string;
}

export default function MainLayout ({ children, title }: TMainLayoutProps) {
    return (
        <>
            <Head>
                <title>{title} | 21MD</title>
            </Head>
            <nav
                className={style.navigation}
            >
                <Link
                    href={'/'}
                    className={style.navText}
                >
                    <span >
                        home
                    </span>
                </Link>
                <Link
                    href={'/recipes'}
                    className={style.navText}
                >
                    <span>
                        recipes
                    </span>
                </Link>
            </nav>
            <main className={style.main}>
                {children}
            </main>
        </>
    );
}
