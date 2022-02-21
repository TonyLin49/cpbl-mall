import { Column, Entity, Index } from "typeorm";

@Index("PK__Quotatio__4B913AC7D25487CE", ["flowKey"], { unique: true })
@Entity("Quotation", { schema: "dbo" })
export class Quotation {
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

  @Column("nvarchar", { name: "QuoteDate", length: 10 })
  quoteDate: string;

  @Column("nvarchar", { name: "EffectDate", length: 10 })
  effectDate: string;

  @Column("nvarchar", { name: "Customer", length: 50 })
  customer: string;

  @Column("nvarchar", { name: "CustomerName", length: 100 })
  customerName: string;

  @Column("nvarchar", { name: "Contact", length: 50 })
  contact: string;

  @Column("nvarchar", { name: "Tel", length: 20 })
  tel: string;

  @Column("nvarchar", { name: "Fax", length: 20 })
  fax: string;

  @Column("nvarchar", { name: "Email", length: 50 })
  email: string;

  @Column("nvarchar", { name: "QuoteTitle", length: 100 })
  quoteTitle: string;

  @Column("nvarchar", { name: "Memo", length: 200 })
  memo: string;

  @Column("decimal", { name: "NetAmount", precision: 18, scale: 0 })
  netAmount: number;

  @Column("nchar", { name: "HasTax", length: 1 })
  hasTax: string;

  @Column("decimal", { name: "Tax", precision: 18, scale: 0 })
  tax: number;

  @Column("decimal", { name: "TotalAmount", precision: 18, scale: 0 })
  totalAmount: number;

  @Column("nvarchar", { name: "EmpId", length: 50 })
  empId: string;
}
