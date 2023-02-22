import mongoose, { models, Schema } from 'mongoose';

const recipeSchema = new Schema({
    title: {
        type: String,
        minLength: 5,
        maxLength: 100,
        required: true,
    },
    ingredients: [{
        type: String,
        required: true,
    }],
    recipe: {
        type: String,
        minLength: 5,
        maxLength: 1000,
    },
    image: {
        type: String,
        required: true,
    },
});

const Recipe = models.Recipe || mongoose.model('Recipe', recipeSchema);

export default Recipe;
