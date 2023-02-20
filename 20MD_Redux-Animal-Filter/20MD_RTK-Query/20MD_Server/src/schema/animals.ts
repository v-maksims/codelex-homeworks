import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 30,
    require: true,
  },
  species: {
    type: String,
    maxLength: 30,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Animals", animalSchema);
