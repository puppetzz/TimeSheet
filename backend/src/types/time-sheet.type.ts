import { TimeSheetProject } from "./time-sheet-project.type";

export type TimeSheet = {
  id: number;
  userId: number;
  project: TimeSheetProject;
  dateAt: Date;
  workingTime: number;
  status: number;
  note: string;
  typeOfWork: number;
  isCharged: boolean;
  workType: number;
  projectTargetUserId: number;
  targetUserWorkingTime: number;
};
