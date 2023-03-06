import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 50,
  },
  year: {
    type: Number,
    min: 1900,
    max: 2023,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Movies", movieSchema);
