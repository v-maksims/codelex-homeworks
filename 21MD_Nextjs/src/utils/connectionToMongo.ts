import mongoose from 'mongoose';

const connectToMongo = () => {
    mongoose.connect('mongodb://localhost:27017/recipes');
};

export default connectToMongo;
