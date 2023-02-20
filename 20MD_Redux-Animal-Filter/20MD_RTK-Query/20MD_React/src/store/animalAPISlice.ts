import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TAnimal = {
    _id: string;
    name: string;
    species: string;
    image: string;
}

export const animalAPISlice = createApi({
    reducerPath: 'animalsApi',
    tagTypes: ['Animals', 'Species'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
    endpoints: (builder) => ({
        getAllAnimals: builder.query<TAnimal[], void>({
            query: () => '/animals',
            providesTags: (result) => (result
                ? [
                    ...result.map(({ _id: id }) => ({ type: 'Animals' as const, id })),
                    { type: 'Animals', id: 'LIST' },
                ]
                : [{ type: 'Animals', id: 'LIST' }]),
        }),
        createAnimal: builder.mutation<unknown, Omit<TAnimal, '_id'> >({
            query: (body) => ({
                url: '/post-animal',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Animals', id: 'LIST' }],
        }),
        deleteAnimal: builder.mutation<unknown, string>({
            query: (id) => ({
                url: `/animals/${id}`,
                method: 'delete',
            }),
            invalidatesTags: [{ type: 'Animals', id: 'LIST' }],
        }),
        getSpecies: builder.query<string[], void>({
            query: () => '/animals-species',
        }),
        getBySpecies: builder.query<TAnimal[], string>({
            query: (species) => `/animals/${species}`,

        }),
    }),
});

export const {
    useGetAllAnimalsQuery,
    useGetSpeciesQuery,
    useCreateAnimalMutation,
    useDeleteAnimalMutation,
    useGetBySpeciesQuery,
} = animalAPISlice;
