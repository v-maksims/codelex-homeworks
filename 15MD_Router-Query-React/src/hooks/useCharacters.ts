import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { charactersAPI } from '../api/API';

export default function useCharactersPage() {
    const [page, setPage] = useState(1);

    const { data: cards, isLoading, error, status } = useQuery({
        queryKey: ['characters list', { page }],
        queryFn: () => charactersAPI.getAll(page),
    });

    const pageCountAddHandler = () => {
        setPage(page + 1);
    };
    const pageCountSubHandler = () => {
        setPage(page - 1);
    };
    return {
        isLoading,
        error,
        status,
        cards,
        pageCountAddHandler,
        pageCountSubHandler,
        page
    };
}