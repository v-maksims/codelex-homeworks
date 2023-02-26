import mongoose, { models, Schema } from 'mongoose';

const categorySchema = new Schema({
    category: {
        type: String,
    },
});

const Category = models.Category || mongoose.model('Category', categorySchema);

export default Category;
