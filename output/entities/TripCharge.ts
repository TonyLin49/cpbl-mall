import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Accounts_4BAC3F29", ["accounts"], {})
@Index("_WA_Sys_AccYear_4BAC3F29", ["accYear"], {})
@Index("_WA_Sys_Applicant_4BAC3F29", ["applicant"], {})
@Index("_WA_Sys_BorrowId_4BAC3F29", ["borrowId"], {})
@Index("_WA_Sys_BudgetDate_4BAC3F29", ["budgetDate"], {})
@Index("_WA_Sys_BudgetDept_4BAC3F29", ["budgetDept"], {})
@Index("_WA_Sys_Code_4BAC3F29", ["code"], {})
@Index("_WA_Sys_CreateDept_4BAC3F29", ["createDept"], {})
@Index("_WA_Sys_DateFrom_4BAC3F29", ["dateFrom"], {})
@Index("_WA_Sys_IsRepayment_4BAC3F29", ["isRepayment"], {})
@Index("_WA_Sys_Project_4BAC3F29", ["project"], {})
@Index("_WA_Sys_Reason_4BAC3F29", ["reason"], {})
@Index("_WA_Sys_SysNo_4BAC3F29", ["sysNo"], {})
@Index("PK__TripChar__4B913AC70CA26758", ["flowKey"], { unique: true })
@Entity("TripCharge", { schema: "dbo" })
export class TripCharge {
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

  @Column("nvarchar", { name: "BudgetDept", length: 50 })
  budgetDept: string;

  @Column("nvarchar", { name: "Project", length: 50 })
  project: string;

  @Column("nvarchar", { name: "Accounts", length: 50 })
  accounts: string;

  @Column("nvarchar", { name: "DateFrom", length: 10 })
  dateFrom: string;

  @Column("nvarchar", { name: "DateTo", length: 10 })
  dateTo: string;

  @Column("decimal", { name: "Days", precision: 18, scale: 0 })
  days: number;

  @Column("nvarchar", { name: "Reason", length: 200 })
  reason: string;

  @Column("decimal", { name: "TotalAmount", precision: 18, scale: 0 })
  totalAmount: number;

  @Column("decimal", { name: "NetAmount", precision: 18, scale: 0 })
  netAmount: number;

  @Column("char", { name: "HasTax", length: 1 })
  hasTax: string;

  @Column("decimal", { name: "Tax", precision: 18, scale: 0 })
  tax: number;

  @Column("char", { name: "IsRepayment", length: 1 })
  isRepayment: string;

  @Column("nvarchar", { name: "BudgetControler", length: 50 })
  budgetControler: string;

  @Column("nvarchar", { name: "Leader", length: 50 })
  leader: string;

  @Column("nvarchar", { name: "DeptManager", length: 50 })
  deptManager: string;

  @Column("nvarchar", { name: "BorrowId", length: 50 })
  borrowId: string;
}
