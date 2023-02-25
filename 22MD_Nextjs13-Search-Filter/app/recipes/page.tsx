import Link from 'next/link';
import Button from '../components/Button/Button';
import RecipesItem from './components/RecipesItem/RecipesItem';
import RecipesList from './components/RecipesList/RecipesList';
import styles from './RecipesPage.module.scss';

export type Trecipe = {
    _id: string;
    title: string;
    ingredients: string[];
    recipe: string[];
    image: string;
}

async function getRecipes (): Promise<Trecipe[]> {
    const res = await fetch('http://localhost:3000/api/recipes', {
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch recipes data');
    }

    return res.json();
}

const RecipesPage = async () => {
    const recipes = await getRecipes();

    return (
        <div className={styles.recipesWrap}>
            <Link href='/recipes/add'>
                <Button
                    label='Create new recipe'
                    type='button'
                />
            </Link>
            <RecipesList>
                {recipes.map(({ _id, image, title }) => (
                    <Link key={_id} href={`/recipes/${_id}`}>
                        <RecipesItem
                            key={_id}
                            image={image}
                            title={title}
                        />
                    </Link>
                ))}
            </RecipesList>
        </div>
    );
};

export default RecipesPage;
