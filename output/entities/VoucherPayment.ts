import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Accounts_7755B73D", ["accounts"], {})
@Index("_WA_Sys_AccYear_7755B73D", ["accYear"], {})
@Index("_WA_Sys_Amount_7755B73D", ["amount"], {})
@Index("_WA_Sys_Applicant_7755B73D", ["applicant"], {})
@Index("_WA_Sys_ApplyDate_7755B73D", ["applyDate"], {})
@Index("_WA_Sys_BorrowId_7755B73D", ["borrowId"], {})
@Index("_WA_Sys_BudgetDate_7755B73D", ["budgetDate"], {})
@Index("_WA_Sys_BudgetDept_7755B73D", ["budgetDept"], {})
@Index("_WA_Sys_Code_7755B73D", ["code"], {})
@Index("_WA_Sys_CreateDept_7755B73D", ["createDept"], {})
@Index("_WA_Sys_IsRepayment_7755B73D", ["isRepayment"], {})
@Index("_WA_Sys_Project_7755B73D", ["project"], {})
@Index("_WA_Sys_SrcKey_7755B73D", ["srcKey"], {})
@Index("_WA_Sys_SrcTable_7755B73D", ["srcTable"], {})
@Index("_WA_Sys_SysNo_7755B73D", ["sysNo"], {})
@Index("_WA_Sys_Tax_7755B73D", ["tax"], {})
@Index("_WA_Sys_VendorName_7755B73D", ["vendorName"], {})
@Index("PK__VoucherP__4B913AC72C6EBF61", ["flowKey"], { unique: true })
@Entity("VoucherPayment", { schema: "dbo" })
export class VoucherPayment {
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

  @Column("varchar", { name: "ApplyDate", length: 50 })
  applyDate: string;

  @Column("varchar", { name: "BudgetDate", length: 50 })
  budgetDate: string;

  @Column("varchar", { name: "AccYear", length: 50 })
  accYear: string;

  @Column("varchar", { name: "BudgetDept", length: 50 })
  budgetDept: string;

  @Column("varchar", { name: "Project", length: 50 })
  project: string;

  @Column("varchar", { name: "Accounts", length: 50 })
  accounts: string;

  @Column("nvarchar", { name: "Vendor", length: 100 })
  vendor: string;

  @Column("varchar", { name: "PaymentType", length: 50 })
  paymentType: string;

  @Column("nvarchar", { name: "Reason", nullable: true, length: 500 })
  reason: string | null;

  @Column("decimal", { name: "Amount", precision: 10, scale: 0 })
  amount: number;

  @Column("decimal", { name: "Tax", precision: 10, scale: 0 })
  tax: number;

  @Column("varchar", { name: "DocUrl", length: 100 })
  docUrl: string;

  @Column("varchar", { name: "BudgetControler", length: 50 })
  budgetControler: string;

  @Column("char", { name: "IsRepayment", length: 1 })
  isRepayment: string;

  @Column("decimal", { name: "NetAmount", precision: 10, scale: 0 })
  netAmount: number;

  @Column("varchar", { name: "InvoiceNo", nullable: true, length: 50 })
  invoiceNo: string | null;

  @Column("nvarchar", { name: "VendorName", length: 50 })
  vendorName: string;

  @Column("varchar", { name: "Leader", length: 50 })
  leader: string;

  @Column("varchar", { name: "DeptManager", length: 50 })
  deptManager: string;

  @Column("varchar", { name: "BorrowId", length: 50 })
  borrowId: string;

  @Column("varchar", { name: "SrcTable", length: 50, default: () => "''" })
  srcTable: string;

  @Column("varchar", { name: "SrcKey", length: 50, default: () => "''" })
  srcKey: string;
}
