'use client';

import { useRouter } from 'next/navigation';
import useForm from '@/app/hooks/useForm';
import RecipeForm from '@/app/components/RecipeForm/RecipeForm';

const AddForm = () => {
    const { push, refresh } = useRouter();
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
            return setErrors(error);
        }

        const res = await fetch('http://localhost:3000/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ recipeData }),
        });
        push('/recipes');
        refresh();
        return res.json();
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
