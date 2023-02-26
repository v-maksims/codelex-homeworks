'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Trecipe } from '@/app/types/recipe';
import Input from '../Input/Input';
import styles from './Search.module.scss';

const Search = () => {
    const [value, setValue] = useState('');
    const [searchResult, setSearchResult] = useState<Trecipe[]>([]);

    const searchRecipe = async (): Promise<Trecipe[]> => {
        const res = await fetch(`http://localhost:3000/api/recipes/search/${value.trimEnd().replaceAll(' ', '%20')}`);
        if (!res.ok) {
            throw new Error('Failed to fetch recipe data');
        }
        return res.json();
    };

    const searchHandler = async () => {
        const results = await searchRecipe();
        setSearchResult(results);
    };

    const clearHandler = () => {
        setValue('');
        setSearchResult([]);
    };

    useEffect(() => {
        if (value) {
            const debounce = setTimeout(() => {
                searchHandler();
            }, 300);

            return () => {
                clearTimeout(debounce);
            };
        }
        return setSearchResult([]);
    }, [value]);

    return (
        <div className={styles.searchWrap}>
            <div className={styles.search}>
                <Input
                    name='search'
                    value={value}
                    onChange={(e) => {
                        setValue(e.currentTarget.value);
                    }}
                    placeholder='Search recipe...'
                    required={false}
                    type='text'
                />
                {(value && searchResult.length > 0) && (
                    <ol className={styles.searchList}>
                        {searchResult.map(({ title, _id }, i) => (
                            <Link
                                key={i}
                                href={`/recipes/${_id}`}
                                className={styles.link}
                            >
                                <li
                                    key={i}
                                    onClick={clearHandler}
                                >
                                    <span className={styles.searchItem}>{title}</span>
                                </li>
                            </Link>
                        ))}
                    </ol>
                )}
                {(value.length > 0 && searchResult.length === 0) && (
                    <ol className={styles.searchList}>
                        <li>
                            <span className={styles.searchItem}>
                                    no results found
                            </span>
                        </li>
                    </ol>
                )}
            </div>
        </div>
    );
};

export default Search;
