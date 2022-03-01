import { Column, Entity, Index } from "typeorm";

@Index("PK__Schedule__4B913AC71B49E053", ["flowKey"], { unique: true })
@Entity("ScheduleManager", { schema: "dbo" })
export class ScheduleManager {
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

  @Column("nvarchar", { name: "GroupName", length: 100 })
  groupName: string;
}
