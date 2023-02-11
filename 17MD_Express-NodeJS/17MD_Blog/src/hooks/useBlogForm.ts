import { useEffect, useState } from 'react';
import { TBlogs } from '../types/Blogs';

export default function useBlogForm () {
    const [data, setData] = useState<TBlogs>({
        content: '',
        image: '',
        title: '',
    });

    const [contents, setContents] = useState('');
    const [fields, setFields] = useState(false);

    const checkInputValues = () => {
        const { content, image, title } = data;
        if (content && image && title) {
            return true;
        }
        return false;
    };

    useEffect(() => {
        setData({
            ...data,
            content: contents,
        });
    }, [contents]);

    useEffect(() => {
        setFields(checkInputValues());
    }, [data]);

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

    return {
        contentHandler,
        imageHandler,
        titleHandler,
        data,
        contents,
        fields,
    };
}
