import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_023D5A04", ["applicant"], {})
@Index("_WA_Sys_Code_023D5A04", ["code"], {})
@Index("_WA_Sys_SrcKey_023D5A04", ["srcKey"], {})
@Index("_WA_Sys_SrcTable_023D5A04", ["srcTable"], {})
@Index("_WA_Sys_SysNo_023D5A04", ["sysNo"], {})
@Index("PK__BudgetSh__4B913AC797C693EC", ["flowKey"], { unique: true })
@Entity("BudgetShare", { schema: "dbo" })
export class BudgetShare {
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

  @Column("nvarchar", { name: "SrcTable", length: 50 })
  srcTable: string;

  @Column("nvarchar", { name: "SrcKey", length: 50 })
  srcKey: string;

  @Column("nvarchar", { name: "SrcReason", length: 500 })
  srcReason: string;

  @Column("decimal", { name: "SrcAmount", precision: 18, scale: 0 })
  srcAmount: number;

  @Column("decimal", { name: "SrcTax", precision: 18, scale: 0 })
  srcTax: number;

  @Column("nvarchar", { name: "ShareReason", length: 500 })
  shareReason: string;
}
