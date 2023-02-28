'use client';

import { useRouter } from 'next/navigation';
import useForm from '@/app/hooks/useForm';
import RecipeForm from '@/app/components/RecipeForm/RecipeForm';
import useToasts from '@/app/hooks/useToasts';

const AddForm = () => {
    const { push, refresh } = useRouter();

    const { toastErrorHandler, toastSuccesHandler, toastWarningHandler } = useToasts();

    const {
        recipeData,
        recipeDataSchema,
        setErrors,
        errors,
        setRecipeData,
        title,
        handleAddField,
        image,
        selectHandler,
        ingredients,
        fieldHandler,
        handleRemoveField,
        recipe,
        options,
    } = useForm();

    const submitHandler = async () => {
        const validationResult = recipeDataSchema.safeParse(recipeData);

        if (!validationResult.success) {
            const error = validationResult.error.format();
            toastWarningHandler('There are incorrect fields', 2000, 'top-left');
            return setErrors(error);
        }

        await fetch('http://localhost:3000/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ recipeData }),
        }).then((res) => {
            if (!res.ok) {
                throw new Error('Response not ok');
            }
            return res.json();
        }).then(() => {
            push('/recipes');
            refresh();
            toastSuccesHandler('Recipe success added', 2000, 'top-left');
        }).catch(() => {
            toastErrorHandler('Something went wrong', 2000, 'top-left');
        });

        return null;
    };

    return (
        <RecipeForm
            buttonLabel='create'
            formLabel='new recipe'
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
    );
};

export default AddForm;
