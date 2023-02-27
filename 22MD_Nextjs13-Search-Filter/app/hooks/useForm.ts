import { useState } from 'react';
import { SingleValue } from 'react-select';
import { z } from 'zod';
import { TCategory } from '../types/recipe';
import {
    TChangeEvent,
    TErrorRecipe,
    TOption,
    TRecipeData,
    TRecipeKeys,
} from '../types/recipeForm';

const useForm = () => {
    const [errors, setErrors] = useState<TErrorRecipe>({ _errors: [] });

    const options: TOption[] = [
        { value: 'appetizers', label: 'Appetizers' },
        { value: 'breakfasts', label: 'Breakfasts' },
        { value: 'desserts', label: 'Desserts' },
        { value: 'main courses', label: 'Main courses' },
    ];

    const recipeDataSchema = z.object({
        title: z.string().min(5).max(100),
        image: z.string().url(),
        category: z.string().min(1, { message: 'Select one of category' }),
        ingredients: z.array(z.string().min(5).max(100)),
        recipe: z.array(z.string().min(50).max(800)),
    });

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

    return {
        recipeDataSchema,
        recipeData,
        setErrors,
        title,
        setRecipeData,
        errors,
        image,
        selectHandler,
        handleAddField,
        ingredients,
        fieldHandler,
        handleRemoveField,
        recipe,
        options,
    };
};

export default useForm;
