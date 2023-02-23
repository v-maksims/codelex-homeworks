import Image from 'next/image';
import axios from 'axios';
import { GetStaticProps } from 'next';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import style from '../../styles/RecipePage.module.scss';
import RecipeLayout from '@/layouts/RecipeLayout/RecipeLayout';
import { TRecipes } from '../recipes';

type TRecipeProps = {
    recipe: TRecipes
}

export default function Recipe ({ recipe: recipeData }:TRecipeProps) {
    const {
        image,
        ingredients,
        recipe,
        title,
    } = recipeData;

    return (
        <MainLayout
            title={title}
        >
            <RecipeLayout>
                <div className={style.recipesWrap}>
                    <h2 className={style.header} >{title}</h2>
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                    />
                    <div>
                        <div className={style.ingredientsWrap}>
                            <h4 className={style.title}>Ingridients:</h4>
                            <ul className={style.list}>
                                {ingredients.map((item, i) => (
                                    <li
                                        key={i}
                                        className={style.listItem}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={style.recipeWrap}>
                            <h4 className={style.title}>Recipe:</h4>
                            <span className={style.recipe}>{recipe}</span>
                        </div>
                    </div>
                </div>
            </RecipeLayout>
        </MainLayout>
    );
}

export const getStaticPaths = async () => {
    const { data: recipes } = await axios.get<TRecipes[]>('http://localhost:3000/api/recipes/get');

    const paths = recipes.map(({ _id: id }) => ({
        params: { id },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps:GetStaticProps<{recipe: TRecipes}> = async ({ params }) => {
    const id = params?.id;
    const { data: recipe } = await axios.get<TRecipes>(`http://localhost:3000/api/recipes/${id}`);

    return {
        props: { recipe },
    };
};
