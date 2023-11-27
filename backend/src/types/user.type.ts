import { Branch } from "./branch.type";
import { Position } from "./position.type";
import { Role } from "./role.type";

export type User = {
  id: number;
  username: string;
  password: string;
  name: string;
  surname: string;
  sex: number;
  phoneNumber: string;
  address: string;
  emailAddress: string;
  isActive: boolean;
  type: number;
  jobTitle: string;
  level: number;
  userCode: string;
  avatarPath: string;
  avatarFullPath: string;
  branch: Branch;
  position: Position;
  role: Role[];
  salary: number;
  salaryAt: Date;
  startDateAt: Date;
  allowedLeaveDate: Date;
  creationDate: Date;
  morningWorking: number;
  morningStartAt: string;
  morningEndAt: string;
  afternoonWorking: number;
  afternoonStartAt: string;
  afternoonEndAt: string;
  isStopWork: boolean;
  isWorkingTimeDefault: boolean;
  beginLevel: number;
  endDateAt: Date;
  defaultProjectTaskId: number;
};