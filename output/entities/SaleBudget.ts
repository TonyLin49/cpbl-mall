import { Column, Entity, Index } from "typeorm";

@Index("PK__SaleBudg__4B913AC736249E7D", ["flowKey"], { unique: true })
@Entity("SaleBudget", { schema: "dbo" })
export class SaleBudget {
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

  @Column("nvarchar", { name: "DeptId", length: 50 })
  deptId: string;

  @Column("nvarchar", { name: "ApplicantName", length: 50 })
  applicantName: string;

  @Column("nvarchar", { name: "BudgetYear", length: 50 })
  budgetYear: string;

  @Column("nvarchar", { name: "Project", length: 50 })
  project: string;

  @Column("ntext", { name: "Memo" })
  memo: string;

  @Column("nvarchar", { name: "MemoUrl", length: 50 })
  memoUrl: string;

  @Column("int", { name: "TotalAmount" })
  totalAmount: number;

  @Column("ntext", { name: "Summary" })
  summary: string;

  @Column("nvarchar", { name: "LoadFile", length: 100 })
  loadFile: string;

  @Column("nvarchar", { name: "BudgetControler", length: 50 })
  budgetControler: string;

  @Column("nvarchar", { name: "Leader", length: 50 })
  leader: string;

  @Column("nvarchar", { name: "DeptManager", length: 50 })
  deptManager: string;
}
