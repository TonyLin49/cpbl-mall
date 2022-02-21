import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_7D78A4E7", ["applicant"], {})
@Index("_WA_Sys_Code_7D78A4E7", ["code"], {})
@Index("_WA_Sys_CreateDept_7D78A4E7", ["createDept"], {})
@Index("_WA_Sys_Memo_7D78A4E7", ["memo"], {})
@Index("_WA_Sys_PayrollDate_7D78A4E7", ["payrollDate"], {})
@Index("_WA_Sys_SysNo_7D78A4E7", ["sysNo"], {})
@Index("_WA_Sys_TaxType_7D78A4E7", ["taxType"], {})
@Index("PK__Bonuses__4B913AC76E902947", ["flowKey"], { unique: true })
@Entity("Bonuses", { schema: "dbo" })
export class Bonuses {
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

  @Column("nvarchar", { name: "PayrollDate", length: 10 })
  payrollDate: string;

  @Column("nvarchar", { name: "TaxType", length: 50 })
  taxType: string;

  @Column("nvarchar", { name: "Memo", length: 200 })
  memo: string;

  @Column("decimal", { name: "TotalAmount", precision: 18, scale: 0 })
  totalAmount: number;

  @Column("decimal", { name: "PayrollRecords", precision: 18, scale: 0 })
  payrollRecords: number;

  @Column("nvarchar", { name: "TaxNo", length: 12, default: () => "''" })
  taxNo: string;
}
