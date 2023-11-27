import mongoose from "mongoose";
import { Branch } from "../types/branch.type";
import { autoIncrement } from "mongoose-plugin-autoinc";

const BranchSchema = new mongoose.Schema<Branch>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  displayName: { type: String, required: true },
  morningWorking: { type: Number },
  morningStartAt: { type: String },
  morningEndAt: { type: String },
  afternoonWorking: { type: Number },
  afternoonStartAt: { type: String },
  afternoonEndAt: { type: String },
  corlor: { type: String },
  code: { type: String },
});

BranchSchema.plugin(autoIncrement, {
  model: "Branch",
  field: "id",
});

export const BranchModel = mongoose.model("Branch", BranchSchema);
