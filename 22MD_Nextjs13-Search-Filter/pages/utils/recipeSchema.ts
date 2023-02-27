import mongoose, { models, Schema } from 'mongoose';

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100,
    },
    ingredients: [{
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100,
    }],
    recipe: [{
        type: String,
        minLength: 50,
        maxLength: 800,
    }],
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        minLength: 1,
    },
});

const Recipe = models.Recipe || mongoose.model('Recipe', recipeSchema);

export default Recipe;
