import { toast } from 'react-toastify';

export default function useToasts () {
    const toastSuccesHandler = (text: string) => {
        toast.success(text, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };

    const toastErrorHandler = (text: string) => {
        toast.error(text, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };
    const toastWarningHandler = (text: string) => {
        toast.warn(text, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };

    return {
        toastSuccesHandler,
        toastErrorHandler,
        toastWarningHandler,
    };
}
