import { Column, Entity, Index } from "typeorm";

@Index("PK__RequestL__4B913AC7369B507E", ["flowKey"], { unique: true })
@Entity("RequestLeave", { schema: "dbo" })
export class RequestLeave {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "Creator", length: 50 })
  creator: string;

  @Column("nvarchar", { name: "ApplyDate", length: 10 })
  applyDate: string;

  @Column("nvarchar", { name: "DeptId", length: 50 })
  deptId: string;

  @Column("nvarchar", { name: "AgentDept", length: 50 })
  agentDept: string;

  @Column("nvarchar", { name: "Agent", length: 50 })
  agent: string;

  @Column("nvarchar", { name: "VacationType", length: 50 })
  vacationType: string;

  @Column("nchar", { name: "IsAgentSign", length: 1 })
  isAgentSign: string;

  @Column("nvarchar", { name: "DateFrom", length: 10 })
  dateFrom: string;

  @Column("nvarchar", { name: "HourFrom", length: 10 })
  hourFrom: string;

  @Column("nvarchar", { name: "DateTo", length: 10 })
  dateTo: string;

  @Column("nvarchar", { name: "HourTo", length: 10 })
  hourTo: string;

  @Column("int", { name: "LeaveDays" })
  leaveDays: number;

  @Column("int", { name: "LeaveHours" })
  leaveHours: number;

  @Column("int", { name: "TotalHours" })
  totalHours: number;

  @Column("nvarchar", { name: "Reason", length: 100 })
  reason: string;

  @Column("nvarchar", { name: "DocUrl", length: 100 })
  docUrl: string;
}
