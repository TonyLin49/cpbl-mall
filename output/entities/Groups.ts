import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_15502E78", ["code"], {})
@Index("_WA_Sys_Leader_15502E78", ["leader"], {})
@Index("_WA_Sys_SysNo_15502E78", ["sysNo"], {})
@Index("PK__Groups__4B913AC708B8F8BC", ["flowKey"], { unique: true })
@Entity("Groups", { schema: "dbo" })
export class Groups {
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

  @Column("nvarchar", { name: "Names", length: 50 })
  names: string;

  @Column("nvarchar", { name: "Leader", length: 50 })
  leader: string;
}
