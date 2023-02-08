import { useEffect, useState } from 'react';
import { TBlogs } from '../types/Blogs';

export default function useBlogForm () {
    const [data, setData] = useState<TBlogs>({
        content: '',
        image: '',
        title: '',
    });

    const [contents, setContents] = useState('');

    useEffect(() => {
        setData({
            ...data,
            content: contents,
        });
    }, [contents]);

    const contentHandler = (value: string) => {
        setContents(value);
    };

    const imageHandler = (value: string) => {
        setData({
            ...data,
            image: value,
        });
    };

    const titleHandler = (value: string) => {
        setData({
            ...data,
            title: value,
        });
    };
    // console.log(data.title);
    // console.log(data.content);

    return {
        contentHandler,
        imageHandler,
        titleHandler,
        data,
        contents,
    };
}
