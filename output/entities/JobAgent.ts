import { Column, Entity, Index } from "typeorm";

@Index("PK__JobAgent__4B913AC7FAFC75F9", ["flowKey"], { unique: true })
@Entity("JobAgent", { schema: "dbo" })
export class JobAgent {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "Emp_id", length: 50 })
  empId: string;

  @Column("nvarchar", { name: "Agent", length: 50 })
  agent: string;

  @Column("nvarchar", { name: "TimeFrom", length: 20 })
  timeFrom: string;

  @Column("nvarchar", { name: "TimeTo", length: 20 })
  timeTo: string;
}
