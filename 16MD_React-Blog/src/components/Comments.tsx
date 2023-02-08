import React from 'react';
import CommentArea from './CommentArea';

type TComments = {
    children: React.ReactNode
    commentHandler: (val:string) => void
    clickHandler:() => void
}

export default function Comments (props:TComments) {
    const {
        children,
        clickHandler,
        commentHandler,
    } = props;

    return (
        <>
            {children}
            <CommentArea
            commentHandler={ commentHandler }
                clickHandler={ clickHandler }
            />
        </>
    );
}
