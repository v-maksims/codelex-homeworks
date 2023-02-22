import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TRecipe = {
    title: string;
    ingredients: string[];
    recipe: string;
    image: string;
    _id: string;
}

export const recipesAPISlice = createApi({
    reducerPath: 'recipesApi',
    tagTypes: ['Recipes'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: (builder) => ({
        getAllRecipes: builder.query<TRecipe[], void>({
            query: () => '/recipes/get',
        }),
        getByIDRecipe: builder.query<TRecipe, string>({
            query: (id) => `/recipes/${id}`,
        }),

    }),
});

export const { useGetAllRecipesQuery, useGetByIDRecipeQuery } = recipesAPISlice;
