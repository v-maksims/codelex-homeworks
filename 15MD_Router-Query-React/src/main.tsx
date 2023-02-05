import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import {BrowserRouter} from 'react-router-dom';
import { QueryClientProvider, QueryClient} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient= new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools/>
        </QueryClientProvider>
    </BrowserRouter>
);
