import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Accounts_756D6ECB", ["accounts"], {})
@Index("_WA_Sys_AccYear_756D6ECB", ["accYear"], {})
@Index("_WA_Sys_Amount_756D6ECB", ["amount"], {})
@Index("_WA_Sys_Applicant_756D6ECB", ["applicant"], {})
@Index("_WA_Sys_ApplyDate_756D6ECB", ["applyDate"], {})
@Index("_WA_Sys_BorrowId_756D6ECB", ["borrowId"], {})
@Index("_WA_Sys_BudgetDate_756D6ECB", ["budgetDate"], {})
@Index("_WA_Sys_BudgetDept_756D6ECB", ["budgetDept"], {})
@Index("_WA_Sys_Code_756D6ECB", ["code"], {})
@Index("_WA_Sys_CreateDept_756D6ECB", ["createDept"], {})
@Index("_WA_Sys_IsRepayment_756D6ECB", ["isRepayment"], {})
@Index("_WA_Sys_Payee_756D6ECB", ["payee"], {})
@Index("_WA_Sys_Project_756D6ECB", ["project"], {})
@Index("_WA_Sys_SrcKey_756D6ECB", ["srcKey"], {})
@Index("_WA_Sys_SrcTable_756D6ECB", ["srcTable"], {})
@Index("_WA_Sys_SysNo_756D6ECB", ["sysNo"], {})
@Index("PK__PettyCas__4B913AC765B50E68", ["flowKey"], { unique: true })
@Entity("PettyCash", { schema: "dbo" })
export class PettyCash {
  @Column("varchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("varchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("varchar", { name: "Code", length: 50 })
  code: string;

  @Column("varchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("varchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("varchar", { name: "ApplyDate", length: 10 })
  applyDate: string;

  @Column("varchar", { name: "BudgetDate", length: 10 })
  budgetDate: string;

  @Column("varchar", { name: "AccYear", length: 50 })
  accYear: string;

  @Column("varchar", { name: "BudgetDept", length: 50 })
  budgetDept: string;

  @Column("varchar", { name: "Project", length: 50 })
  project: string;

  @Column("varchar", { name: "Accounts", length: 50 })
  accounts: string;

  @Column("nvarchar", { name: "Payee", length: 100 })
  payee: string;

  @Column("nvarchar", { name: "Reason", length: 500 })
  reason: string;

  @Column("decimal", { name: "Amount", precision: 18, scale: 0 })
  amount: number;

  @Column("decimal", { name: "NetAmount", precision: 18, scale: 0 })
  netAmount: number;

  @Column("varchar", {
    name: "InvoiceNo",
    nullable: true,
    length: 100,
    default: () => "''",
  })
  invoiceNo: string | null;

  @Column("char", { name: "IsRepayment", length: 1 })
  isRepayment: string;

  @Column("decimal", { name: "Tax", precision: 18, scale: 0 })
  tax: number;

  @Column("varchar", { name: "DocUrl", length: 100 })
  docUrl: string;

  @Column("varchar", { name: "BudgetControler", length: 50 })
  budgetControler: string;

  @Column("varchar", { name: "Leader", length: 50 })
  leader: string;

  @Column("varchar", { name: "DeptManager", length: 50 })
  deptManager: string;

  @Column("varchar", { name: "PayeeDept", length: 50 })
  payeeDept: string;

  @Column("varchar", { name: "BorrowId", length: 50 })
  borrowId: string;

  @Column("varchar", { name: "SrcTable", length: 50 })
  srcTable: string;

  @Column("varchar", { name: "SrcKey", length: 50 })
  srcKey: string;
}
