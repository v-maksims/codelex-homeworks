import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { episodesApi } from '../../api/API';

export default function useEpisodes() {
    const [page, setPage] = useState(1);

    const { data: episodes, isLoading, error } = useQuery({
        queryKey: ['episodes list', { page }],
        queryFn: () => episodesApi.getAll(page),
    });

    const pageCountAddHandler = () => {
        setPage(page + 1);
    };
    const pageCountSubHandler = () => {
        setPage(page - 1);
    };

    const pages = episodes?.data.info.pages;
    const results = episodes?.data.results;
    return {
        isLoading,
        error,
        pageCountAddHandler,
        pageCountSubHandler,
        page,
        pages,
        results
    };
}