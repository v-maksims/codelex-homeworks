import { toast } from 'react-toastify';

export default function useToastSuccess () {
    const toastHandle = (text: string) => {
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

    return { toastHandle };
}
