'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import RecipeForm from '@/app/components/RecipeForm/RecipeForm';
import useForm from '@/app/hooks/useForm';
import { Trecipe } from '@/app/types/recipe';
import Button from '@/app/components/Button/Button';

const EditForm = () => {
    const { push, refresh } = useRouter();

    const searchParams = useSearchParams();
    const id = searchParams?.get('id');

    const {
        errors,
        fieldHandler,
        handleAddField,
        handleRemoveField,
        image,
        ingredients,
        options,
        recipe,
        recipeData,
        recipeDataSchema,
        selectHandler,
        setErrors,
        setRecipeData,
        title,
    } = useForm();
    useEffect(() => {
        fetch(`http://localhost:3000/api/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipeData(data));
    }, []);

    const submitHandler = async () => {
        const validationResult = recipeDataSchema.safeParse(recipeData);

        if (!validationResult.success) {
            const error = validationResult.error.format();
            return setErrors(error);
        }
        console.log('edited without errors');

        const res = await fetch(`http://localhost:3000/api/recipes/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ recipeData }),
        });
        push(`/recipes/${id}`);
        refresh();
        return res.json();
    };

    return (
        <>
            <Link href={`/recipes/${id}`}>
                <Button
                    label='back to recipe'
                    type='button'
                />
            </Link>
            <RecipeForm
                buttonLabel='edit'
                formLabel={`edit ${title}`}
                submitHandler={submitHandler}
                title={title}
                image={image}
                ingredients={ingredients}
                recipe={recipe}
                setRecipeData={setRecipeData}
                recipeData={recipeData}
                errors={errors}
                options={options}
                selectHandler={selectHandler}
                fieldHandler={fieldHandler}
                handleAddField={handleAddField}
                handleRemoveField={handleRemoveField}
            />
        </>
    );
};

export default EditForm;
