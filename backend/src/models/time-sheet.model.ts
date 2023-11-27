import mongoose from "mongoose";
import { TimeSheet } from "../types/time-sheet.type";
import { autoIncrement } from "mongoose-plugin-autoinc";

const TimeSheetSchema = new mongoose.Schema<TimeSheet>({
  id: { type: Number, required: true, unique: true },
  userId: { type: Number, required: true },
  project: {
    projectId: { type: Number, required: true },
    projectName: { type: String, required: true },
    taskId: { type: Number, required: true },
    taskName: { type: String, required: true },
  },
  dateAt: { type: Date, required: true },
  workingTime: { type: Number, required: true },
  status: { type: Number, default: 0 },
  note: { type: String, required: true },
  typeOfWork: { type: Number, required: true },
  isCharged: { type: Boolean, default: false },
  workType: { type: Number, required: true },
  projectTargetUserId: { type: Number },
  targetUserWorkingTime: { type: Number },
});

TimeSheetSchema.plugin(autoIncrement, {
  model: "TimeSheet",
  field: "id",
});

export const TimeSheetModel = mongoose.model("TimeSheet", TimeSheetSchema);
