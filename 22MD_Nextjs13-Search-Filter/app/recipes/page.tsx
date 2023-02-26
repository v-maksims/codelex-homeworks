import RecipePageLayout from '../layouts/RecipesPageLayout/RecipesPageLayout';
import { TCategoryData, Trecipe } from '../types/recipe';

const getRecipes = async (): Promise<Trecipe[]> => {
    const res = await fetch('http://localhost:3000/api/recipes', {
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch recipes data');
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

const RecipesPage = async () => {
    const [recipes, categories] = await Promise.all([getRecipes(), getCategories()]);

    return (
        <RecipePageLayout
            categories={categories}
            recipes={recipes}
            recipeCategory='all recipes'
        />
    );
};

export default RecipesPage;
