import mongoose from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { User } from "../types/user.type";

const UserSchema = new mongoose.Schema<User>({
  id: { type: Number, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, reuqired: true },
  surname: { type: String, required: true },
  sex: { type: Number },
  phoneNumber: { type: String },
  address: { type: String },
  emailAddress: { type: String },
  isActive: { type: Boolean },
  type: { type: Number },
  jobTitle: { type: String },
  level: { type: Number },
  userCode: { type: String },
  avatarPath: { type: String },
  avatarFullPath: { type: String },
  branch: { type: mongoose.Types.ObjectId, ref: "Branch" },
  position: { type: mongoose.Types.ObjectId, ref: "Position" },
  role: [{ type: mongoose.Types.ObjectId, ref: "Role" }],
  salary: { type: Number },
  salaryAt: { type: Date },
  startDateAt: { type: Date },
  allowedLeaveDate: { type: Date },
  creationDate: { type: Date },
  morningWorking: { type: Number },
  morningStartAt: { type: String },
  morningEndAt: { type: String },
  afternoonWorking: { type: Number },
  afternoonStartAt: { type: String },
  afternoonEndAt: { type: String },
  isStopWork: { type: Boolean },
  isWorkingTimeDefault: { type: Boolean },
  beginLevel: { type: Number },
  endDateAt: { type: Date },
  defaultProjectTaskId: { type: Number },
});

UserSchema.plugin(autoIncrement, {
  model: "User",
  field: "userId",
});

export const UserModel = mongoose.model("User", UserSchema);
