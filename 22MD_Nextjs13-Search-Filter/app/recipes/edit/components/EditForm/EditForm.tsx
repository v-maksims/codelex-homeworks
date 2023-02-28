'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import RecipeForm from '@/app/components/RecipeForm/RecipeForm';
import useForm from '@/app/hooks/useForm';
import Button from '@/app/components/Button/Button';
import useToasts from '@/app/hooks/useToasts';

const EditForm = () => {
    const { push, refresh } = useRouter();

    const searchParams = useSearchParams();
    const id = searchParams?.get('id');

    const { toastErrorHandler, toastSuccesHandler, toastWarningHandler } = useToasts();
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
            toastWarningHandler('There are incorrect fields', 2000, 'bottom-center');
            return setErrors(error);
        }

        await fetch(`http://localhost:3000/api/recipes/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ recipeData }),
        }).then((res) => {
            if (!res.ok) {
                throw new Error('Response not ok');
            }
            return res.json();
        }).then(() => {
            push(`/recipes/${id}`);
            refresh();
            toastSuccesHandler('Recipe success edited', 2000, 'top-right');
        }).catch(() => {
            toastErrorHandler('Something went wrong', 2000, 'top-right');
        });

        return null;
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
                formLabel={'edit recipe'}
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
