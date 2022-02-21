import { Column, Entity, Index } from "typeorm";

@Index("PK__Orders__4B913AC71E85206B", ["flowKey"], { unique: true })
@Entity("Orders", { schema: "dbo" })
export class Orders {
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

  @Column("varchar", {
    name: "EnterDate",
    nullable: true,
    length: 10,
    default: () => "''",
  })
  enterDate: string | null;

  @Column("varchar", {
    name: "DeptId",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  deptId: string | null;

  @Column("varchar", {
    name: "Staff",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  staff: string | null;

  @Column("varchar", {
    name: "Customer",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  customer: string | null;

  @Column("varchar", {
    name: "CustomerPurcherNo",
    nullable: true,
    length: 20,
    default: () => "''",
  })
  customerPurcherNo: string | null;

  @Column("varchar", {
    name: "Area",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  area: string | null;

  @Column("varchar", {
    name: "PaymentType",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  paymentType: string | null;

  @Column("varchar", {
    name: "Shipping",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  shipping: string | null;

  @Column("float", {
    name: "ExchangeRate",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  exchangeRate: number | null;

  @Column("int", { name: "Discount", nullable: true, default: () => "(0)" })
  discount: number | null;

  @Column("varchar", {
    name: "TaxCode",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  taxCode: string | null;

  @Column("varchar", {
    name: "InvoiceType",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  invoiceType: string | null;

  @Column("int", { name: "Credits", nullable: true, default: () => "(0)" })
  credits: number | null;

  @Column("int", {
    name: "CreditBalance",
    nullable: true,
    default: () => "(0)",
  })
  creditBalance: number | null;

  @Column("varchar", {
    name: "Warehouse",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  warehouse: string | null;

  @Column("varchar", {
    name: "ShippingDate",
    nullable: true,
    length: 10,
    default: () => "''",
  })
  shippingDate: string | null;

  @Column("nvarchar", {
    name: "Summary",
    nullable: true,
    length: 500,
    default: () => "''",
  })
  summary: string | null;

  @Column("varchar", {
    name: "Currency",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  currency: string | null;

  @Column("decimal", {
    name: "TotalAmount",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  totalAmount: number | null;

  @Column("decimal", {
    name: "BalanceAmount",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  balanceAmount: number | null;

  @Column("nvarchar", {
    name: "InvoiceAddress",
    nullable: true,
    length: 100,
    default: () => "''",
  })
  invoiceAddress: string | null;

  @Column("nvarchar", {
    name: "ShippingAddress",
    nullable: true,
    length: 100,
    default: () => "''",
  })
  shippingAddress: string | null;

  @Column("nvarchar", {
    name: "Memo",
    nullable: true,
    length: 200,
    default: () => "''",
  })
  memo: string | null;

  @Column("varchar", {
    name: "Status",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  status: string | null;
}
