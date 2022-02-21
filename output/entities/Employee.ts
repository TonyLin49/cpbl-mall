import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Agent_0EA330E9", ["agent"], {})
@Index("_WA_Sys_Applicant_0EA330E9", ["applicant"], {})
@Index("_WA_Sys_Code_0EA330E9", ["code"], {})
@Index("_WA_Sys_DeptId_0EA330E9", ["deptId"], {})
@Index("_WA_Sys_EmpName_0EA330E9", ["empName"], {})
@Index("_WA_Sys_GroupType_0EA330E9", ["groupType"], {})
@Index("_WA_Sys_IdNo_0EA330E9", ["idNo"], {})
@Index("_WA_Sys_JobTitle_0EA330E9", ["jobTitle"], {})
@Index("_WA_Sys_Leader_0EA330E9", ["leader"], {})
@Index("_WA_Sys_LeavesDate_0EA330E9", ["leavesDate"], {})
@Index("_WA_Sys_OnBoardDate_0EA330E9", ["onBoardDate"], {})
@Index("_WA_Sys_SysNo_0EA330E9", ["sysNo"], {})
@Index("PK__Employee__4B913AC754E50822", ["flowKey"], { unique: true })
@Entity("Employee", { schema: "dbo" })
export class Employee {
  @Column("nvarchar", { primary: true, name: "flowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "createDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "empName", length: 50 })
  empName: string;

  @Column("nvarchar", { name: "idType", length: 50 })
  idType: string;

  @Column("nvarchar", { name: "idNo", length: 12 })
  idNo: string;

  @Column("nvarchar", { name: "deptId", length: 50 })
  deptId: string;

  @Column("nvarchar", { name: "agent", length: 50 })
  agent: string;

  @Column("nvarchar", { name: "tel", length: 50 })
  tel: string;

  @Column("nvarchar", { name: "mobile", length: 50 })
  mobile: string;

  @Column("nvarchar", { name: "email", length: 50 })
  email: string;

  @Column("nvarchar", { name: "address", nullable: true, length: 100 })
  address: string | null;

  @Column("nvarchar", { name: "jobTitle", length: 50 })
  jobTitle: string;

  @Column("nvarchar", { name: "onBoardDate", length: 20 })
  onBoardDate: string;

  @Column("nvarchar", { name: "leavesDate", length: 20 })
  leavesDate: string;

  @Column("nvarchar", { name: "birthday", length: 10 })
  birthday: string;

  @Column("nvarchar", { name: "jobDegree", length: 50 })
  jobDegree: string;

  @Column("nvarchar", { name: "salaryLevel", length: 50 })
  salaryLevel: string;

  @Column("nvarchar", { name: "sysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "code", length: 50 })
  code: string;

  @Column("decimal", {
    name: "hourlyWage",
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  hourlyWage: number | null;

  @Column("nvarchar", { name: "groupType", length: 50 })
  groupType: string;

  @Column("nvarchar", { name: "leader", length: 50 })
  leader: string;

  @Column("nchar", { name: "isHeads", length: 1 })
  isHeads: string;

  @Column("nvarchar", { name: "agentDept", length: 50 })
  agentDept: string;
}
