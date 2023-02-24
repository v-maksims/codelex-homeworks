import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/Button/Button';
import { Trecipe } from '../page';
import PostDelete from './components/PostDelete/PostDelete';
import styles from './RecipePage.module.scss';

type TRecipePageProps = {
    params: {id: string}
}

async function getRecipe (id:string): Promise<Trecipe> {
    const res = await fetch(`http://localhost:3000/api/recipes/${id}`, {
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch recipe data');
    }

    return res.json();
}

const RecipePage = async ({ params }: TRecipePageProps) => {
    const {
        image,
        ingredients,
        recipe,
        title,
    } = await getRecipe(params.id);

    return (
        <div className={styles.recipesWrap}>
            <h2 className={styles.header} >{title}</h2>
            <Image
                src={image}
                alt={title}
                width={500}
                height={500}
            />
            <div>
                <div className={styles.ingredientsWrap}>
                    <h4 className={styles.title}>Ingridients:</h4>
                    <ul className={styles.list}>
                        {ingredients.map((item, i) => (
                            <li
                                key={i}
                                className={styles.listItem}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.recipeWrap}>
                    <h4 className={styles.title}>Recipe:</h4>
                    <span className={styles.recipe}>{recipe}</span>
                </div>
            </div>
            <Link href={'/recipes'}>
                <PostDelete id={params.id}/>
            </Link>
            <Link href={'/recipes'}>
                <Button
                    label='back to recipes'
                    type='button'
                />
            </Link>
        </div>
    );
};

export default RecipePage;
