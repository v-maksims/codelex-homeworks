import Link from 'next/link';
import styles from './RecipesPageLayout.module.scss';
import { TCategoryData, Trecipe } from '@/app/types/recipe';
import Button from '@/app/components/Button/Button';
import RecipesList from '@/app/recipes/components/RecipesList/RecipesList';
import RecipesItem from '@/app/recipes/components/RecipesItem/RecipesItem';

type TRecipePageLayoutProps = {
    categories: TCategoryData[];
    recipes: Trecipe[];
    recipeCategory: string;
}

const RecipePageLayout = ({ categories, recipes, recipeCategory }: TRecipePageLayoutProps) => (
    <div className={styles.recipesWrap}>
        <div className={styles.recipesActions}>
            <Link href='/recipes/add'>
                <Button
                    label='Create new recipe'
                    type='button'
                />
            </Link>
            <Link
                className={styles.link}
                href='/recipes'
            >
                <span className={styles.categoryItem}>
                    all
                </span>
            </Link>
            {categories.map(({ category, _id }) => (
                <Link
                    key={_id}
                    href={`/recipes/category/${category}`}
                    className={styles.link}
                >
                    <span className={styles.categoryItem} >
                        {category}
                    </span>
                </Link>
            ))}
        </div>
        <h2 className={styles.categoryTitle}>{recipeCategory}:</h2>
        {recipes.length ? (
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
        ) : (
            <span className={styles.categoryEmpty}>
                empty category
            </span>
        )}
    </div>
);

export default RecipePageLayout;
