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
            <RecipesList>
                {data.map(({ _id, image, title }) => (
                    <Link key={_id} href={'/recipe/[recipeId]'} as={`/recipe/${_id}`}>
                        <RecipesItem key={_id} image={image} title={title}/>
                    </Link>
                ))}
            </RecipesList>
        </MainLayout>
    );
}
