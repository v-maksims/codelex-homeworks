import { TCategoryData, Trecipe } from '@/app/types/recipe';
import RecipePageLayout from '@/app/layouts/RecipesPageLayout/RecipesPageLayout';

type TRecipePageProps = {
    params: {category: string}
}

const getRecipes = async (category: string): Promise<Trecipe[]> => {
    const res = await fetch(`http://localhost:3000/api/recipes/category/${category}`, {
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch recipe data');
    }

    return res.json();
};

const getCategories = async (): Promise<TCategoryData[]> => {
    const res = await fetch('http://localhost:3000/api/recipes/categories');

    if (!res.ok) {
        throw new Error('Failed to fetch recipes data');
    }

    return res.json();
};

const CategoryRecipesPage = async ({ params }: TRecipePageProps) => {
    const [recipes, categories] = await Promise.all([getRecipes(params.category), getCategories()]);

    return (
        <RecipePageLayout
            categories={categories}
            recipes={recipes}
            recipeCategory={params.category.replaceAll('%20', ' ')}
        />
    );
};

export default CategoryRecipesPage;
