import mongoose from "mongoose";
import { Role } from "../types/role.type";
import { autoIncrement } from "mongoose-plugin-autoinc";

const RoleSchema = new mongoose.Schema<Role>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  displayName: { type: String, required: true },
  normalizedName: { type: String, required: true },
  description: { type: String },
  userId: { type: [Number] },
});

RoleSchema.plugin(autoIncrement, {
  model: "Role",
  field: "id",
});

export const RoleModel = mongoose.model("Role", RoleSchema);
