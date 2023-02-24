'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Button from '@/app/components/Button/Button';

type TPostDeleteProps = {
    id: string
}

const PostDelete = ({ id }: TPostDeleteProps) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    async function deletePost () {
        await fetch(`http://localhost:3000/api/recipes/${id}`, {
            method: 'DELETE',
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
