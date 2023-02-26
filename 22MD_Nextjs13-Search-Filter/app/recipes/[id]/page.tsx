import Image from 'next/image';
import Link from 'next/link';
import { Trecipe } from '@/app/types/recipe';
import PostDelete from './components/PostDelete/PostDelete';
import styles from './RecipePage.module.scss';

type TRecipePageProps = {
    params: {id: string}
}

const getRecipe = async (id:string): Promise<Trecipe> => {
    const res = await fetch(`http://localhost:3000/api/recipes/${id}`, {
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch recipe data');
    }

    return res.json();
};

const RecipePage = async ({ params }: TRecipePageProps) => {
    const {
        image,
        ingredients,
        recipe,
        title,
        category,
    } = await getRecipe(params.id);

    return (
        <div className={styles.recipesWrap}>
            <div className={styles.actionWrap}>
                <Link href={'/recipes'}>
                    <PostDelete id={params.id}/>
                </Link>
                <Link
                    href={`/recipes/category/${category}`}
                    className={styles.categoryLink}
                >
                    <span className={styles.linkItem}>
                        {category}
                    </span>
                </Link>
            </div>
            <h2 className={styles.header} >{title}</h2>
            <div className={styles.imageWrap}>
                <Image
                    className={styles.image}
                    src={image}
                    alt={title}
                    fill
                />
            </div>
            <div className={styles.informationWrap}>
                <div className={styles.information}>
                    <h4 className={styles.informationTitle}>Ingridients:</h4>
                    <ul>
                        {ingredients.map((item, i) => (
                            <li
                                key={i}
                                className={styles.ingridientItem}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.information}>
                    <h4 className={styles.informationTitle}>Recipe:</h4>
                    <ol className={styles.informationRecipe}>
                        {recipe.map((step, i) => (
                            <li
                                key={i}
                                className={styles.recipeItem}
                            >
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipePage;
