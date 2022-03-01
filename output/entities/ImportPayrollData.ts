import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_IdNo_173876EA", ["idNo"], {})
@Index("_WA_Sys_Insuracne_173876EA", ["insuracne"], {})
@Index("_WA_Sys_PayrollDate_173876EA", ["payrollDate"], {})
@Entity("ImportPayrollData", { schema: "dbo" })
export class ImportPayrollData {
  @Column("nvarchar", { name: "PayrollDate", length: 10 })
  payrollDate: string;

  @Column("nvarchar", { name: "IdNo", length: 20 })
  idNo: string;

  @Column("int", { name: "Salary" })
  salary: number;

  @Column("int", { name: "Tax" })
  tax: number;

  @Column("int", { name: "Insuracne" })
  insuracne: number;

  @Column("int", { name: "NetAmount" })
  netAmount: number;

  @Column("nvarchar", { name: "Reason", length: 100 })
  reason: string;

  @Column("nvarchar", { name: "Memo", length: 100 })
  memo: string;
}
