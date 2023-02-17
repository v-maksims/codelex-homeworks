import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: 30,
    require: true,
  },
  content: {
    type: String,
    maxLength: 250,
    require: false,
  },
  date: {
    type: Date,
    default: () => Date.now(),
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("ToDo", todoSchema);
