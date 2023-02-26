import React from 'react';
import './globals.scss';
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import styles from './layout.module.scss';
import Search from './components/Search/Search';

const roboto = Roboto({
    weight: ['400', '700', '900'],
    subsets: ['latin'],
});

type TRootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout ({ children }: TRootLayoutProps) {
    return (
        <html lang="en" className={roboto.className}>
            <head />
            <body
                className='container'
            >
                <header className={styles.header}>
                    <nav className={styles.navigationWrap}>
                        <Link
                            href='/'
                            className={styles.navigation}
                        >
                            home
                        </Link>
                        <Link
                            href='/recipes'
                            className={styles.navigation}
                        >
                            recipes
                        </Link>
                    </nav>
                    <Search/>
                </header>
                <main className={styles.mainWrap}>
                    {children}
                </main>
            </body>
        </html>
    );
}
