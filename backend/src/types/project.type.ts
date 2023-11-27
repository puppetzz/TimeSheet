import { ProjectTask } from "./project-task.type";
import { ProjectUser } from "./project-user.type";
import { ProjectTargetUser } from "./project-target-user.type";

export type Project = {
  id: number;
  code: string;
  name: string;
  status: number;
  activeMember: number;
  type: number;
  timeStart: Date;
  timeEnd: Date;
  tasks: ProjectTask[];
  users: ProjectUser[];
  targetUsers: ProjectTargetUser[];
  komuChannelId: string;
  isNotifyToKomu: boolean;
  isNoticeKMSubmitTS: boolean;
  isNoticeKMRequestOffDate: boolean;
  isNoticeKMApproveRequestOffDate: boolean;
  isNoticeKMRequestChangeWorkingTime: boolean;
  isNoticeKMApproveChangeWorkingTime: boolean;
  isAllUserBelongTo: boolean;
};