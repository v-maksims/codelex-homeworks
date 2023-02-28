'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Button from '@/app/components/Button/Button';
import useToasts from '@/app/hooks/useToasts';

type TPostDeleteProps = {
    id: string
}

const PostDelete = ({ id }: TPostDeleteProps) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { toastSuccesHandler, toastErrorHandler } = useToasts();

    async function deletePost () {
        await fetch(`http://localhost:3000/api/recipes/${id}`, {
            method: 'DELETE',
        }).then((res) => {
            if (!res.ok) {
                throw new Error('Response not ok');
            }
            return res.json();
        }).then(() => {
            toastSuccesHandler('Recipe success deleted', 2000, 'top-left');
        }).catch(() => {
            toastErrorHandler('Something went wrong', 2000, 'top-left');
        });

        startTransition(() => {
            router.refresh();
        });
    }

    return (
        <>
            <Button
                type='button'
                label='delete post'
                onClick={deletePost}
                disabled={isPending}
            />
        </>
    );
};

export default PostDelete;
