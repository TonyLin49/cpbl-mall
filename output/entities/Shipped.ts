import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_4C8B54C9", ["applicant"], {})
@Index("_WA_Sys_Code_4C8B54C9", ["code"], {})
@Index("_WA_Sys_CreateDept_4C8B54C9", ["createDept"], {})
@Index("_WA_Sys_Customer_4C8B54C9", ["customer"], {})
@Index("_WA_Sys_DeptId_4C8B54C9", ["deptId"], {})
@Index("_WA_Sys_EndInvoiceNo_4C8B54C9", ["endInvoiceNo"], {})
@Index("_WA_Sys_EnterDate_4C8B54C9", ["enterDate"], {})
@Index("_WA_Sys_InvoiceNo_4C8B54C9", ["invoiceNo"], {})
@Index("_WA_Sys_InvoiceType_4C8B54C9", ["invoiceType"], {})
@Index("_WA_Sys_IsLinkInvoice_4C8B54C9", ["isLinkInvoice"], {})
@Index("_WA_Sys_IsPayCash_4C8B54C9", ["isPayCash"], {})
@Index("_WA_Sys_OrderNo_4C8B54C9", ["orderNo"], {})
@Index("_WA_Sys_Staff_4C8B54C9", ["staff"], {})
@Index("_WA_Sys_SysNo_4C8B54C9", ["sysNo"], {})
@Index("_WA_Sys_TaxCode_4C8B54C9", ["taxCode"], {})
@Index("PK__Shipped__4B913AC7E66F88C8", ["flowKey"], { unique: true })
@Entity("Shipped", { schema: "dbo" })
export class Shipped {
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

  @Column("varchar", { name: "EnterDate", length: 10, default: () => "''" })
  enterDate: string;

  @Column("varchar", { name: "DeptId", length: 50, default: () => "''" })
  deptId: string;

  @Column("varchar", { name: "Staff", length: 50, default: () => "''" })
  staff: string;

  @Column("varchar", { name: "OrderNo", length: 50, default: () => "''" })
  orderNo: string;

  @Column("varchar", { name: "Customer", length: 50, default: () => "''" })
  customer: string;

  @Column("varchar", { name: "Area", length: 50, default: () => "''" })
  area: string;

  @Column("varchar", { name: "PaymentType", length: 50, default: () => "''" })
  paymentType: string;

  @Column("float", {
    name: "ExchangeRate",
    precision: 53,
    default: () => "(0)",
  })
  exchangeRate: number;

  @Column("varchar", { name: "TaxCode", length: 50, default: () => "''" })
  taxCode: string;

  @Column("char", { name: "IsLinkInvoice", length: 1, default: () => "' '" })
  isLinkInvoice: string;

  @Column("varchar", { name: "InvoiceType", length: 50, default: () => "''" })
  invoiceType: string;

  @Column("varchar", { name: "InvoiceNo", length: 20, default: () => "''" })
  invoiceNo: string;

  @Column("int", { name: "Credits", default: () => "(0)" })
  credits: number;

  @Column("int", { name: "CreditBalance", default: () => "(0)" })
  creditBalance: number;

  @Column("varchar", { name: "Warehouse", length: 50, default: () => "''" })
  warehouse: string;

  @Column("varchar", { name: "ShippingDate", length: 10, default: () => "''" })
  shippingDate: string;

  @Column("nvarchar", { name: "Summary", length: 500, default: () => "''" })
  summary: string;

  @Column("varchar", { name: "Shipping", length: 50, default: () => "''" })
  shipping: string;

  @Column("varchar", { name: "Currency", length: 50, default: () => "''" })
  currency: string;

  @Column("decimal", {
    name: "SaleAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  saleAmount: number;

  @Column("decimal", {
    name: "SaleTax",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  saleTax: number;

  @Column("decimal", {
    name: "SaleTotalAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  saleTotalAmount: number;

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

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;

  @Column("varchar", { name: "Status", length: 50, default: () => "''" })
  status: string;

  @Column("char", { name: "IsPayCash", length: 1, default: () => "' '" })
  isPayCash: string;

  @Column("varchar", {
    name: "DepositReceive",
    length: 50,
    default: () => "''",
  })
  depositReceive: string;

  @Column("decimal", {
    name: "DepositAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  depositAmount: number;

  @Column("varchar", { name: "EndInvoiceNo", length: 20, default: () => "''" })
  endInvoiceNo: string;

  @Column("decimal", {
    name: "Discount",
    precision: 18,
    scale: 4,
    default: () => "(0)",
  })
  discount: number;
}
