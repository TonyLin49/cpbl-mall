import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Accounts_182C9B23", ["accounts"], {})
@Index("_WA_Sys_Applicant_182C9B23", ["applicant"], {})
@Index("_WA_Sys_ApplyDate_182C9B23", ["applyDate"], {})
@Index("_WA_Sys_Code_182C9B23", ["code"], {})
@Index("_WA_Sys_CreateDept_182C9B23", ["createDept"], {})
@Index("_WA_Sys_IncomeType_182C9B23", ["incomeType"], {})
@Index("_WA_Sys_InvoiceDate_182C9B23", ["invoiceDate"], {})
@Index("_WA_Sys_InvoiceNo_182C9B23", ["invoiceNo"], {})
@Index("_WA_Sys_InvoiceTitle_182C9B23", ["invoiceTitle"], {})
@Index("_WA_Sys_InvoiceType_182C9B23", ["invoiceType"], {})
@Index("_WA_Sys_Memo_182C9B23", ["memo"], {})
@Index("_WA_Sys_SysNo_182C9B23", ["sysNo"], {})
@Index("_WA_Sys_VatNo_182C9B23", ["vatNo"], {})
@Index("PK__Invoice__4B913AC7087B28B9", ["flowKey"], { unique: true })
@Entity("Invoice", { schema: "dbo" })
export class Invoice {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("varchar", { name: "SysNo", length: 50, default: () => "''" })
  sysNo: string;

  @Column("varchar", { name: "Code", length: 50, default: () => "''" })
  code: string;

  @Column("varchar", { name: "CreateDept", length: 50, default: () => "''" })
  createDept: string;

  @Column("varchar", { name: "Applicant", length: 50, default: () => "''" })
  applicant: string;

  @Column("varchar", { name: "ApplyDate", length: 10, default: () => "''" })
  applyDate: string;

  @Column("varchar", { name: "InvoiceDate", length: 10, default: () => "''" })
  invoiceDate: string;

  @Column("varchar", { name: "Customer", length: 50, default: () => "''" })
  customer: string;

  @Column("nvarchar", { name: "InvoiceTitle", length: 50, default: () => "''" })
  invoiceTitle: string;

  @Column("varchar", { name: "InvoiceType", length: 50, default: () => "''" })
  invoiceType: string;

  @Column("decimal", {
    name: "Amount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  amount: number;

  @Column("char", { name: "HasTax", length: 1, default: () => "''" })
  hasTax: string;

  @Column("decimal", {
    name: "Tax",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  tax: number;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;

  @Column("varchar", { name: "InvoiceNo", length: 20, default: () => "''" })
  invoiceNo: string;

  @Column("decimal", {
    name: "NetAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  netAmount: number;

  @Column("varchar", {
    name: "UnifiedBusinessNo",
    length: 20,
    default: () => "''",
  })
  unifiedBusinessNo: string;

  @Column("varchar", { name: "IncomeType", length: 50, default: () => "''" })
  incomeType: string;

  @Column("varchar", { name: "Accounts", length: 50, default: () => "''" })
  accounts: string;

  @Column("varchar", { name: "BudgetDept", length: 50, default: () => "''" })
  budgetDept: string;

  @Column("varchar", { name: "Project", length: 50, default: () => "''" })
  project: string;

  @Column("varchar", { name: "VatNo", length: 50, default: () => "''" })
  vatNo: string;
}
