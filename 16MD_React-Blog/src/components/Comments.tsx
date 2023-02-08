import React from 'react';
import CommentArea from './CommentArea';

type TComments = {
    children: React.ReactNode
}

export default function Comments ({children}:TComments) {
    return (
        <>
            {children}
            <CommentArea/>
        </>
    );
}