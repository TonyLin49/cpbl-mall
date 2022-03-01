import { Column, Entity, Index } from "typeorm";

@Index("PK__Requisti__4B913AC749CEA2BE", ["flowKey"], { unique: true })
@Entity("Requistions", { schema: "dbo" })
export class Requistions {
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

  @Column("nvarchar", { name: "ApplyDate", length: 10 })
  applyDate: string;

  @Column("nvarchar", { name: "BudgetDate", length: 10 })
  budgetDate: string;

  @Column("nvarchar", { name: "AccYear", length: 50 })
  accYear: string;

  @Column("nvarchar", { name: "ApplyType", length: 50 })
  applyType: string;

  @Column("nvarchar", { name: "BudgetDept", length: 50 })
  budgetDept: string;

  @Column("nvarchar", { name: "Project", length: 50 })
  project: string;

  @Column("nvarchar", { name: "Accounts", length: 50 })
  accounts: string;

  @Column("nvarchar", { name: "Reason", length: 200 })
  reason: string;

  @Column("nvarchar", { name: "DocUrl", length: 100 })
  docUrl: string;

  @Column("int", { name: "TotalAmount" })
  totalAmount: number;
}
