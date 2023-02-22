import Link from 'next/link';
import RecipesItem from '@/components/Recipes/components/PecipesItem/RecipesItem';
import RecipesList from '@/components/Recipes/components/RecipesList/RecipesList';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { useGetAllRecipesQuery } from '@/slices/recipesSlice';

export default function Recipes () {
    const { data, isLoading } = useGetAllRecipesQuery();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!data) {
        throw Error('No recipes');
    }

    return (
        <MainLayout
            title='Recipes'
        >
            <h1>recepies list</h1>
            <RecipesList>
                {data.map(({ _id }) => (
                    <Link key={_id} href={'/recipe/[recipeId]'} as={`/recipe/${_id}`}>
                        <RecipesItem key={_id} />
                    </Link>
                ))}
            </RecipesList>
        </MainLayout>
    );
}
