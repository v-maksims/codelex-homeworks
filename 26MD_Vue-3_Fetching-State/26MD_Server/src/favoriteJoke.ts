import mongoose from "mongoose";

const favoriteJokesSchema = new mongoose.Schema({
  joke: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

export default mongoose.model("FavoriteJokes", favoriteJokesSchema);
