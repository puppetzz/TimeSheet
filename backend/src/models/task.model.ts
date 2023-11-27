import mongoose from "mongoose";
import { Task } from "../types/task.type";
import { autoIncrement } from "mongoose-plugin-autoinc";

const TaskSchema = new mongoose.Schema<Task>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: Number, required: true },
  isDeleted: { type: Boolean, default: false },
});

TaskSchema.plugin(autoIncrement, {
  model: "Task",
  field: "id",
});

export const TaskModel = mongoose.model("Task", TaskSchema);
