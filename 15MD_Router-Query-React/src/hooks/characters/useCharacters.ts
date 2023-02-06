import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { charactersApi } from '../../api/API';

export default function useCharacters() {
    const [page, setPage] = useState(1);
    const [value, setValue] = useState('');

    
    const { data: characters, isLoading, error} = useQuery({
        queryKey: ['characters list', { page }],
        queryFn: () => charactersApi.getAll(page),
    });
    
    const pageCountAddHandler = () => {
        setPage(page + 1);
    };
    const pageCountSubHandler = () => {
        setPage(page - 1);
    };

    const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    
    const pages = characters?.data.info.pages;
    const charactersResult = characters?.data.results;


    return {
        isLoading,
        error,
        pageCountAddHandler,
        pageCountSubHandler,
        page,
        pages,
        charactersResult,
        value,
        inputHandler
    };
}