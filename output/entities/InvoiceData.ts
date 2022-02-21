import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_40E497F3", ["applicant"], {})
@Index("_WA_Sys_Code_40E497F3", ["code"], {})
@Index("_WA_Sys_CustomerName_40E497F3", ["customerName"], {})
@Index("_WA_Sys_InvoiceDate_40E497F3", ["invoiceDate"], {})
@Index("_WA_Sys_InvoiceType_40E497F3", ["invoiceType"], {})
@Index("_WA_Sys_IsInvalid_40E497F3", ["isInvalid"], {})
@Index("_WA_Sys_SrcKey_40E497F3", ["srcKey"], {})
@Index("_WA_Sys_SrcTable_40E497F3", ["srcTable"], {})
@Index("_WA_Sys_SysNo_40E497F3", ["sysNo"], {})
@Index("_WA_Sys_TaxCode_40E497F3", ["taxCode"], {})
@Index("PK__InvoiceD__4B913AC788773673", ["flowKey"], { unique: true })
@Entity("InvoiceData", { schema: "dbo" })
export class InvoiceData {
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

  @Column("varchar", { name: "DeductCode", length: 10, default: () => "''" })
  deductCode: string;

  @Column("varchar", { name: "DeptId", length: 50, default: () => "''" })
  deptId: string;

  @Column("varchar", { name: "SrcTable", length: 50, default: () => "''" })
  srcTable: string;

  @Column("varchar", { name: "SrcKey", length: 50, default: () => "''" })
  srcKey: string;

  @Column("varchar", { name: "Customer", length: 50, default: () => "''" })
  customer: string;

  @Column("nvarchar", { name: "CustomerName", length: 50, default: () => "''" })
  customerName: string;

  @Column("varchar", { name: "TaxCode", length: 50, default: () => "''" })
  taxCode: string;

  @Column("varchar", { name: "InvoiceType", length: 50, default: () => "''" })
  invoiceType: string;

  @Column("varchar", { name: "Currency", length: 50, default: () => "''" })
  currency: string;

  @Column("float", {
    name: "ExchangeRate",
    precision: 53,
    default: () => "(0)",
  })
  exchangeRate: number;

  @Column("varchar", { name: "VatNo", length: 20, default: () => "''" })
  vatNo: string;

  @Column("varchar", { name: "TaxNo", length: 20, default: () => "''" })
  taxNo: string;

  @Column("varchar", {
    name: "DepositReceive",
    length: 50,
    default: () => "''",
  })
  depositReceive: string;

  @Column("nvarchar", {
    name: "InvoiceAddress",
    length: 100,
    default: () => "''",
  })
  invoiceAddress: string;

  @Column("nvarchar", {
    name: "ShippingAddress",
    length: 100,
    default: () => "''",
  })
  shippingAddress: string;

  @Column("decimal", {
    name: "InvoiceAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  invoiceAmount: number;

  @Column("decimal", {
    name: "InvoiceTax",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  invoiceTax: number;

  @Column("decimal", {
    name: "InvoiceTotalAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  invoiceTotalAmount: number;

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

  @Column("char", { name: "IsInvalid", length: 1, default: () => "' '" })
  isInvalid: string;

  @Column("varchar", { name: "InvoiceTime", length: 10, default: () => "''" })
  invoiceTime: string;

  @Column("varchar", { name: "CarrierType", length: 50, default: () => "''" })
  carrierType: string;

  @Column("varchar", { name: "CarrierId1", length: 20, default: () => "''" })
  carrierId1: string;

  @Column("varchar", { name: "CarrierId2", length: 20, default: () => "''" })
  carrierId2: string;

  @Column("varchar", { name: "LoveCode", length: 10, default: () => "''" })
  loveCode: string;

  @Column("nvarchar", { name: "CancelReason", length: 50, default: () => "''" })
  cancelReason: string;

  @Column("varchar", { name: "CancelDate", length: 10, default: () => "''" })
  cancelDate: string;

  @Column("varchar", { name: "CancelTime", length: 10, default: () => "''" })
  cancelTime: string;

  @Column("char", { name: "HasTransXml", length: 1, default: () => "''" })
  hasTransXml: string;

  @Column("varchar", {
    name: "CustomsClearanceMark",
    length: 10,
    default: () => "''",
  })
  customsClearanceMark: string;

  @Column("varchar", {
    name: "BondedAreaConfirm",
    length: 10,
    default: () => "''",
  })
  bondedAreaConfirm: string;

  @Column("char", { name: "HasTransCancelXml", length: 1, default: () => "''" })
  hasTransCancelXml: string;

  @Column("decimal", {
    name: "ZeroTaxAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  zeroTaxAmount: number;

  @Column("decimal", {
    name: "FreeTaxAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  freeTaxAmount: number;
}
