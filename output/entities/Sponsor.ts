import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_440B1D61", ["code"], {})
@Index("_WA_Sys_Emp_id_440B1D61", ["empId"], {})
@Index("_WA_Sys_SysNo_440B1D61", ["sysNo"], {})
@Index("PK__Sponsor__4B913AC70290F6A9", ["flowKey"], { unique: true })
@Entity("Sponsor", { schema: "dbo" })
export class Sponsor {
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

  @Column("nvarchar", { name: "Description", length: 50 })
  description: string;

  @Column("nvarchar", { name: "Emp_id", length: 50 })
  empId: string;

  @Column("nvarchar", { name: "Memo", length: 50 })
  memo: string;
}
