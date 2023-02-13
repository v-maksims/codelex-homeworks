import { useEffect, useState } from 'react';
import { TBlogs } from '../types/Blogs';

export default function useBlogForm () {
    const [data, setData] = useState<TBlogs>({
        content: '',
        title: '',
    });

    const [contents, setContents] = useState('');
    const [fields, setFields] = useState(false);

    const checkInputValues = () => {
        const { content, title } = data;
        if (content && title) {
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

    const titleHandler = (value: string) => {
        setData({
            ...data,
            title: value,
        });
    };

    return {
        contentHandler,
        titleHandler,
        data,
        contents,
        fields,
    };
}
