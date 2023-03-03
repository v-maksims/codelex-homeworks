import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Animals", animalSchema);
