import { Column, Entity, Index } from "typeorm";

@Index("PK__Proceeds__4B913AC7383CFABF", ["flowKey"], { unique: true })
@Entity("ProceedsInvoiceData", { schema: "dbo" })
export class ProceedsInvoiceData {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("varchar", { name: "SysNo", length: 50, default: () => "''" })
  sysNo: string;

  @Column("varchar", { name: "Code", length: 50, default: () => "''" })
  code: string;

  @Column("varchar", { name: "CreateDept", length: 50, default: () => "''" })
  createDept: string;

  @Column("varchar", { name: "Applicant", length: 50, default: () => "''" })
  applicant: string;

  @Column("varchar", { name: "InvoiceDate", length: 10, default: () => "''" })
  invoiceDate: string;

  @Column("varchar", { name: "AccYear", length: 4, default: () => "''" })
  accYear: string;

  @Column("varchar", { name: "AccMonth", length: 2, default: () => "''" })
  accMonth: string;

  @Column("varchar", { name: "DeductCode", length: 10, default: () => "''" })
  deductCode: string;

  @Column("varchar", { name: "SrcTable", length: 50, default: () => "''" })
  srcTable: string;

  @Column("varchar", { name: "SrcKey", length: 50, default: () => "''" })
  srcKey: string;

  @Column("varchar", { name: "Vendor", length: 50, default: () => "''" })
  vendor: string;

  @Column("varchar", { name: "VatNo", length: 20, default: () => "''" })
  vatNo: string;

  @Column("nvarchar", { name: "VendorType", length: 50, default: () => "''" })
  vendorType: string;

  @Column("varchar", { name: "TaxCode", length: 50, default: () => "''" })
  taxCode: string;

  @Column("varchar", { name: "InvoiceType", length: 50, default: () => "''" })
  invoiceType: string;

  @Column("varchar", { name: "Currency", length: 50, default: () => "''" })
  currency: string;

  @Column("decimal", {
    name: "ExchangeRate",
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  exchangeRate: number;

  @Column("char", { name: "WithoutDeduct", length: 1, default: () => "' '" })
  withoutDeduct: string;

  @Column("decimal", {
    name: "CurrencyAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  currencyAmount: number;

  @Column("decimal", {
    name: "CurrencyTax",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  currencyTax: number;

  @Column("decimal", {
    name: "CurrencyTotalAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  currencyTotalAmount: number;

  @Column("decimal", {
    name: "NetAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  netAmount: number;

  @Column("decimal", {
    name: "Tax",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  tax: number;

  @Column("decimal", {
    name: "TotalAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  totalAmount: number;
}
