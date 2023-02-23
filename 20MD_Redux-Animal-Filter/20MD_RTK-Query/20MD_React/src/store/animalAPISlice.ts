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
            providesTags: ['Animals', 'Species'],
        }),
        createAnimal: builder.mutation<unknown, Omit<TAnimal, '_id'> >({
            query: (body) => ({
                url: '/post-animal',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Animals', 'Species'],
        }),
        deleteAnimal: builder.mutation<unknown, string>({
            query: (id) => ({
                url: `/animals/${id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Animals', 'Species'],
        }),
        getSpecies: builder.query<string[], void>({
            query: () => '/animals-species',
            providesTags: ['Species'],
        }),
        getBySpecies: builder.query<TAnimal[], string>({
            query: (species) => `/animals/${species}`,
            providesTags: ['Animals', 'Species'],
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
