import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_276EDEB3", ["applicant"], {})
@Index("_WA_Sys_Code_276EDEB3", ["code"], {})
@Index("_WA_Sys_SysNo_276EDEB3", ["sysNo"], {})
@Index("PK__Phrase__4B913AC7D5148E5D", ["flowKey"], { unique: true })
@Entity("Phrase", { schema: "dbo" })
export class Phrase {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "Names", length: 100 })
  names: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;
}
