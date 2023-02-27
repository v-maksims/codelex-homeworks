import { ChangeEvent } from 'react';
import { z } from 'zod';
import { Trecipe } from './recipe';

export type TRecipeKeys = 'recipe' | 'ingredients';

export type TChangeEvent = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>

export type TRecipeData = Omit<Trecipe, '_id'>

export type TErrorRecipe =z.ZodFormattedError<TRecipeData, string>

export type TOption = {
    value: string;
    label: string;
}
