import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import './index.scss';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export const queryClient = new QueryClient();

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'ru', 'lv'],
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['cookie'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },

    });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Suspense fallback={ <div> Loading...</div> }>
        <BrowserRouter>
            <QueryClientProvider client={ queryClient }>
                <App />
                <ReactQueryDevtools/>
            </QueryClientProvider>
        </BrowserRouter>
    </Suspense>,
);
