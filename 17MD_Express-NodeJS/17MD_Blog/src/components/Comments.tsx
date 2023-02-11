import React from 'react';
import CommentArea from './CommentArea';

type TComments = {
    children: React.ReactNode
    value: string
    clickHandler: () => void
    commentHandler: (val: string) => void

}

export default function Comments (props: TComments) {
    const {
        children,
        value,
        clickHandler,
        commentHandler,
    } = props;

    return (
        <>
            {children}
            <CommentArea
                value={ value }
                commentHandler={ commentHandler }
                clickHandler={ clickHandler }
            />
        </>
    );
}
