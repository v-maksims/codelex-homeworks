import Select, { SingleValue } from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import { Dispatch, SetStateAction } from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Button from '@/app/components/Button/Button';
import styles from './RecipeForm.module.scss';
import {
    TChangeEvent,
    TErrorRecipe,
    TOption,
    TRecipeData,
    TRecipeKeys,
} from '@/app/types/recipeForm';

interface TRecipeFormProps extends Omit<TRecipeData, 'category'> {
    submitHandler: () => void;
    selectHandler: (e: SingleValue<TOption>) => void;
    handleAddField: (data: TRecipeKeys) => void;
    fieldHandler: (e: TChangeEvent, i: number, data: TRecipeKeys) => void;
    handleRemoveField: (pos: number, data: TRecipeKeys) => void;
    setRecipeData: Dispatch<SetStateAction<TRecipeData>>;
    recipeData: TRecipeData;
    errors: TErrorRecipe;
    options: TOption[];
    formLabel: string;
    buttonLabel:string;
}

const RecipeForm = (props:TRecipeFormProps) => {
    const {
        submitHandler,
        image,
        ingredients,
        recipe,
        title,
        setRecipeData,
        recipeData,
        errors,
        options,
        selectHandler,
        fieldHandler,
        handleAddField,
        handleRemoveField,
        formLabel,
        buttonLabel,
    } = props;

    return (
        <Form
            text={formLabel}
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
                label={buttonLabel}
                type='submit'
            />
        </Form>
    );
};

export default RecipeForm;
