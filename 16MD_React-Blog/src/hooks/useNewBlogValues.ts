import { useState } from 'react';
import { TBlogs } from '../types/Blogs';

export default function useNewBlogValues () {
    const [data, setData] = useState<TBlogs>({
        comments:[],
        content:'',
        image: '',
        title: ''
    });
    const contentHandler = (value: string) => {
        setData({
            ...data,
            content: value
        });
    };
    const imageHandler = (value: string) => {
        setData({
            ...data,
            image: value
        });
    };
    const titleHandler = (value: string) => {
        setData({
            ...data,
            title: value
        });
    };
    return {
        contentHandler,
        imageHandler,
        titleHandler,
        data,
    };
}