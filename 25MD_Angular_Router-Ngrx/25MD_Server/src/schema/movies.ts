import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Movies", movieSchema);
