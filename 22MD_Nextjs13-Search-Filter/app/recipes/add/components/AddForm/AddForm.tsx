'use client';

import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Form from '@/app/components/Form/Form';
import Input from '@/app/components/Input/Input';
import Button from '@/app/components/Button/Button';
import styles from './AddForm.module.scss';

type TRecipeData = {
    title: string;
    image: string;
    ingredients: string[];
    recipe: string[];
}

const AddForm = () => {
    const { push } = useRouter();

    const [recipeData, setRecipeData] = useState<TRecipeData>({
        title: '',
        image: '',
        ingredients: [''],
        recipe: [''],
    });

    const {
        image,
        ingredients,
        recipe,
        title,
    } = recipeData;

    const ingredientFieldHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
        const values = [...ingredients];
        values[i] = e.currentTarget.value;
        setRecipeData({ ...recipeData, ingredients: values });
    };

    const recipeFieldHandler = (e: ChangeEvent<HTMLTextAreaElement>, i: number) => {
        const values = [...recipe];
        values[i] = e.currentTarget.value;
        setRecipeData({ ...recipeData, recipe: values });
    };

    const handleAddIngredientField = () => {
        setRecipeData({ ...recipeData, ingredients: [...ingredients, ''] });
    };

    const handleAddRecipeField = () => {
        setRecipeData({ ...recipeData, recipe: [...recipe, ''] });
    };

    const handleRemoveIngredientField = (pos:number) => {
        const fields = ingredients.filter((field, i) => i !== pos);
        setRecipeData({ ...recipeData, ingredients: fields });
    };

    const handleRemoveRecipeField = (pos:number) => {
        const fields = recipe.filter((field, i) => i !== pos);
        setRecipeData({ ...recipeData, recipe: fields });
    };

    const submitHandler = async () => {
        await fetch('http://localhost:3000/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ recipeData }),
        });
        push('/recipes');
    };

    return (
        <>
            <Form
                text='new recipe'
                className={styles.formWrap}
                onSubmit={submitHandler}
            >
                <Input
                    label='recipe name'
                    value={title}
                    onChange={(e) => setRecipeData({
                        ...recipeData,
                        title: e.currentTarget.value,
                    })}
                    name='recipe name'
                    placeholder='Recipe name...'
                    required={true}
                    type='text'
                />
                <Input
                    label='recipe image'
                    value={image}
                    onChange={(e) => setRecipeData({
                        ...recipeData,
                        image: e.currentTarget.value,
                    })}
                    name='recipe imagee'
                    placeholder='Image URL... '
                    required={true}
                    type='text'
                />
                <div className={styles.addWrap}>
                    <span className={styles.addText}>ingredients:</span>
                    <Button
                        label='add ingredient'
                        type='button'
                        onClick={handleAddIngredientField}
                    />
                </div>

                {ingredients.map((ingridient, i) => (
                    <div
                        key={i}
                        className={styles.ingredientWrap}
                    >
                        <span
                            className={styles.ingredientText}
                        >
                            #{i + 1}
                        </span>
                        <div className={styles.inputWeight}>
                            <Input
                                value={ingridient}
                                onChange={(e) => ingredientFieldHandler(e, i)}
                                name='ingridient'
                                placeholder={`Ingredient ${i + 1}`}
                                required={true}
                                type='text'
                            />
                        </div>
                        <Button
                            label='X'
                            type='button'
                            onClick={() => handleRemoveIngredientField(i)}
                        />
                    </div>
                ))}
                <div className={styles.addWrap}>
                    <span className={styles.addText}>Recipe steps:</span>
                    <Button
                        label='add recipe step'
                        type='button'
                        onClick={handleAddRecipeField}
                    />
                </div>
                {recipe.map((step, i) => (
                    <div
                        key={i}
                        className={styles.recipeWrap}
                    >
                        <span
                            className={styles.recipeText}
                        >
                            {`Step ${i + 1}`}
                        </span>
                        <textarea
                            className={styles.textArea}
                            value={step}
                            onChange={(e) => recipeFieldHandler(e, i)}
                            placeholder={`Step ${i + 1}`}
                            required={true}
                            cols={45}
                            rows={5}
                        />
                        <Button
                            label='X'
                            type='button'
                            onClick={() => handleRemoveRecipeField(i)}
                        />
                    </div>
                ))}
                <Button
                    label='create'
                    type='submit'
                />
            </Form>
        </>
    );
};

export default AddForm;
