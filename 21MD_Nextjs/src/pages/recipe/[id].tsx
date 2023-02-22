import { useRouter } from 'next/router';
import Image from 'next/image';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { useGetByIDRecipeQuery } from '@/slices/recipesSlice';
import style from '../../styles/RecipePage.module.scss';

export default function Recipe () {
    const { query } = useRouter();
    // console.log(query.id);
    const { data, isLoading } = useGetByIDRecipeQuery(String(query.id));

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!data) {
        throw Error('No recipe');
    }

    // console.log(data.image);
    const {
        _id,
        image,
        ingredients,
        recipe,
        title,
    } = data;

    return (
        <MainLayout
            title='Recipe'
        >
            <div className={style.recipesWrap}>
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                />
                <div>
                    <div className={style.ingredients}></div>
                    <div className={style.recipe}></div>
                </div>
            </div>
        </MainLayout>
    );
}
