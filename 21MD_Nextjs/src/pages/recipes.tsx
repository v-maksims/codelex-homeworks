import Link from 'next/link';
import axios from 'axios';
import RecipesItem from '@/components/Recipes/components/PecipesItem/RecipesItem';
import RecipesList from '@/components/Recipes/components/RecipesList/RecipesList';
import MainLayout from '@/layouts/MainLayout/MainLayout';

export type TRecipes = {
    _id: string;
    title: string;
    ingredients: string[];
    recipe: string;
    image: string;
}

type TRecipesProps = {
    recipes: TRecipes[]
}

export default function Recipes ({ recipes }: TRecipesProps) {
    return (
        <MainLayout
            title='Recipes'
        >
            <RecipesList>
                {recipes.map(({ _id, image, title }) => (
                    <Link key={_id} href={'/recipe/[id]'} as={`/recipe/${_id}`}>
                        <RecipesItem key={_id} image={image} title={title}/>
                    </Link>
                ))}
            </RecipesList>
        </MainLayout>
    );
}

export const getStaticProps = async () => {
    const { data: recipes } = await axios.get<TRecipes[]>('http://localhost:3000/api/recipes/get');

    return {
        props: {
            recipes,
        },
    };
};
