'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Select, { SingleValue } from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import Form from '@/app/components/Form/Form';
import Input from '@/app/components/Input/Input';
import Button from '@/app/components/Button/Button';
import styles from './AddForm.module.scss';
import { TCategory, Trecipe } from '@/app/types/recipe';

type TRecipeKeys = 'recipe' | 'ingredients';

type TChangeEvent = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>

type TOption = {
    value: string;
    label: string;
}

type TRecipeData = Omit<Trecipe, '_id'>

const AddForm = () => {
    const { push, refresh } = useRouter();
    const [errors, setErrors] = useState<z.ZodFormattedError<{
        title: string;
        image: string;
        category: string;
        ingredients: string[];
        recipe: string[];
    }, string>>({ _errors: [] });

    const recipeDataSchema = z.object({
        title: z.string().min(5).max(100),
        image: z.string().url(),
        category: z.string().min(1, { message: 'Select one of category' }),
        ingredients: z.array(z.string().min(5).max(100)),
        recipe: z.array(z.string().min(50).max(800)),
    });

    const options:TOption[] = [
        { value: 'appetizers', label: 'Appetizers' },
        { value: 'breakfasts', label: 'Breakfasts' },
        { value: 'desserts', label: 'Desserts' },
        { value: 'main courses', label: 'Main courses' },
    ];

    const [recipeData, setRecipeData] = useState<TRecipeData>({
        title: '',
        image: '',
        ingredients: [''],
        recipe: [''],
        category: '',
    });

    const {
        image,
        ingredients,
        recipe,
        title,
    } = recipeData;

    const selectHandler = (e: SingleValue<TOption>) => {
        setRecipeData({
            ...recipeData,
            category: e?.value as TCategory,
        });
    };

    const fieldHandler = (e: TChangeEvent, i: number, data: TRecipeKeys) => {
        const values = [...recipeData[data]];
        values[i] = e.currentTarget.value;
        setRecipeData({ ...recipeData, [data]: values });
    };

    const handleAddField = (data: TRecipeKeys) => {
        setRecipeData({ ...recipeData, [data]: [...recipeData[data], ''] });
    };

    const handleRemoveField = (pos: number, data: TRecipeKeys) => {
        const fields: string[] = [...recipeData[data]];
        fields.splice(pos, 1);
        setRecipeData({ ...recipeData, [data]: fields });
    };

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
                    type='text'
                />
                {errors.title?._errors && (
                    <span className={styles.errorMessage}>
                        {errors.title?._errors[0]}
                    </span>
                )}
                <Input
                    label='recipe image'
                    value={image}
                    onChange={(e) => setRecipeData({
                        ...recipeData,
                        image: e.currentTarget.value,
                    })}
                    name='recipe imagee'
                    placeholder='Image URL... '
                    type='text'
                />
                {errors.image?._errors && (
                    <span className={styles.errorMessage}>
                        {errors.image?._errors[0]}
                    </span>
                )}
                <Select
                    id={uuidv4()}
                    className={styles.select}
                    options={options}
                    onChange={(e) => selectHandler(e)}
                />
                {errors.category?._errors && (
                    <span className={styles.errorMessage}>
                        {errors.category?._errors[0]}
                    </span>
                )}
                <div className={styles.addWrap}>
                    <span className={styles.addText}>ingredients:</span>
                    <Button
                        label='add ingredient'
                        type='button'
                        onClick={() => handleAddField('ingredients')}
                    />
                </div>
                {ingredients.map((ingridient, i) => (
                    <div
                        key={uuidv4()}
                        className={styles.list}
                    >
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
                                    onChange={(e) => fieldHandler(e, i, 'ingredients')}
                                    name='ingridient'
                                    placeholder={`Ingredient ${i + 1}`}
                                    type='text'
                                />
                            </div>
                            <Button
                                label='X'
                                type='button'
                                onClick={() => handleRemoveField(i, 'ingredients')}
                                disabled={!(ingredients.length > 1)}
                            />
                        </div>
                        {errors.ingredients?.[i]?._errors && (
                            <span
                                key={uuidv4()}
                                className={styles.errorMessage}
                            >
                                {errors.ingredients[i]._errors[0]}
                            </span>
                        )}
                    </div>
                ))}
                <div className={styles.addWrap}>
                    <span className={styles.addText}>Recipe steps:</span>
                    <Button
                        label='add recipe step'
                        type='button'
                        onClick={() => handleAddField('recipe')}
                    />
                </div>
                {recipe.map((step, i) => (
                    <div
                        key={uuidv4()}
                        className={styles.list}
                    >
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
                                onChange={(e) => fieldHandler(e, i, 'recipe')}
                                placeholder={`Step ${i + 1}`}
                                cols={45}
                                rows={5}
                            />
                            <Button
                                label='X'
                                type='button'
                                onClick={() => handleRemoveField(i, 'recipe')}
                                disabled={!(recipe.length > 1)}
                            />
                        </div>
                        {errors.recipe?.[i]?._errors && (
                            <span
                                key={uuidv4()}
                                className={styles.errorMessage}
                            >
                                {errors.recipe[i]._errors[0]}
                            </span>
                        )}
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
