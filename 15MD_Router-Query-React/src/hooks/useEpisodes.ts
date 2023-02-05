import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { episodesApi } from '../api/API';

export default function useEpisodes() {
    const [page, setPage] = useState(1);

    const { data: cards, isLoading, error, status } = useQuery({
        queryKey: ['episodes list', { page }],
        queryFn: () => episodesApi.getAll(page),
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