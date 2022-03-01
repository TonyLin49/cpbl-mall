import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_SysNo_49C3F6B7", ["sysNo"], {})
@Index("PK__TmpStaff__4B913AC76B92DCD7", ["flowKey"], { unique: true })
@Entity("TmpStaffImport", { schema: "dbo" })
export class TmpStaffImport {
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

  @Column("nvarchar", { name: "ImportDate", length: 10 })
  importDate: string;

  @Column("nvarchar", { name: "ExcelFile", length: 100 })
  excelFile: string;

  @Column("nvarchar", { name: "Memo", length: 500 })
  memo: string;
}
