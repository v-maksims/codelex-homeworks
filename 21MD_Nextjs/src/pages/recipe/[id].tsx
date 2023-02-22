import { useRouter } from 'next/router';
import Image from 'next/image';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { useGetByIDRecipeQuery } from '@/slices/recipesSlice';

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
            <h1>recipes item {query.id}</h1>
            <img src={image} />
        </MainLayout>
    );
}
