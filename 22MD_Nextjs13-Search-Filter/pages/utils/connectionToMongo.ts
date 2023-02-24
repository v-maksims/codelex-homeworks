import mongoose from 'mongoose';

const connectToMongo = async () => {
    mongoose.set('strictQuery', false);

    await mongoose.connect('mongodb://localhost:27017/recipes');
};

export default connectToMongo;
