import mongoose from "mongoose";
import { Project } from "../types/project.type";
import { autoIncrement } from "mongoose-plugin-autoinc";

const ProjectShema = new mongoose.Schema<Project>({
  id: { type: Number, required: true, unique: true },
  code: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: Number, default: 0 },
  activeMember: { type: Number, required: true },
  type: { type: Number, required: true },
  timeStart: { type: Date, required: true },
  timeEnd: { type: Date, required: true },
  tasks: [
    {
      taskId: { type: Number, required: true },
      billable: { type: Boolean, required: true },
    },
  ],
  users: [
    {
      userId: { type: Number, required: true },
      type: { type: Number, required: true },
      isTemp: { type: Boolean, required: true },
    },
  ],
  targetUsers: [
    {
      userId: { type: Number, required: true },
      roleName: { type: String, default: "" },
    },
  ],
  komuChannelId: { type: String, default: "" },
  isNotifyToKomu: { type: Boolean, default: false },
  isNoticeKMSubmitTS: { type: Boolean, default: false },
  isNoticeKMRequestOffDate: { type: Boolean, default: false },
  isNoticeKMApproveRequestOffDate: { type: Boolean, default: false },
  isNoticeKMRequestChangeWorkingTime: { type: Boolean, default: false },
  isNoticeKMApproveChangeWorkingTime: { type: Boolean, default: false },
  isAllUserBelongTo: { type: Boolean, default: false },
});

ProjectShema.plugin(autoIncrement, {
  model: "Project",
  field: "id",
});

export const ProjectModel = mongoose.model("Project", ProjectShema);
