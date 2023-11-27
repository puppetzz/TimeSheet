import mongoose from "mongoose";
import { Position } from "../types/position.type";
import { autoIncrement } from "mongoose-plugin-autoinc";

const PositionSchema = new mongoose.Schema<Position>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  shortName: { type: String, required: true },
  color: { type: String },
  code: { type: String },
});

PositionSchema.plugin(autoIncrement, {
  model: "Position",
  field: "id",
});

export const PositionModel = mongoose.model("Position", PositionSchema);
