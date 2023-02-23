import { AppProps } from 'next/app';
import '../styles/index.scss';
import NextNProgress from 'nextjs-progressbar';

export default function App ({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress
                color="#820000"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <Component {...pageProps}/>
        </>
    );
}
