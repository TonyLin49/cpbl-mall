import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_0EAE1DE1", ["applicant"], {})
@Index("_WA_Sys_Code_0EAE1DE1", ["code"], {})
@Index("_WA_Sys_CreateDept_0EAE1DE1", ["createDept"], {})
@Index("_WA_Sys_Customer_0EAE1DE1", ["customer"], {})
@Index("_WA_Sys_ReturnDate_0EAE1DE1", ["returnDate"], {})
@Index("_WA_Sys_SysNo_0EAE1DE1", ["sysNo"], {})
@Index("_WA_Sys_Tax_0EAE1DE1", ["tax"], {})
@Index("_WA_Sys_TaxCode_0EAE1DE1", ["taxCode"], {})
@Index("_WA_Sys_TotalAmount_0EAE1DE1", ["totalAmount"], {})
@Index("PK__ShippedR__4B913AC718DBF02B", ["flowKey"], { unique: true })
@Entity("ShippedReturn", { schema: "dbo" })
export class ShippedReturn {
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

  @Column("varchar", { name: "ReturnDate", length: 10, default: () => "''" })
  returnDate: string;

  @Column("varchar", { name: "DeptId", length: 50, default: () => "''" })
  deptId: string;

  @Column("varchar", { name: "Staff", length: 50, default: () => "''" })
  staff: string;

  @Column("varchar", { name: "OrderNo", length: 50, default: () => "''" })
  orderNo: string;

  @Column("varchar", { name: "ShippedNo", length: 50, default: () => "''" })
  shippedNo: string;

  @Column("varchar", { name: "Customer", length: 50, default: () => "''" })
  customer: string;

  @Column("varchar", { name: "Area", length: 50, default: () => "''" })
  area: string;

  @Column("varchar", { name: "PaymentType", length: 50, default: () => "''" })
  paymentType: string;

  @Column("varchar", { name: "Shipping", length: 50, default: () => "''" })
  shipping: string;

  @Column("varchar", { name: "Currency", length: 50, default: () => "''" })
  currency: string;

  @Column("float", {
    name: "ExchangeRate",
    precision: 53,
    default: () => "(0)",
  })
  exchangeRate: number;

  @Column("int", { name: "Discount", default: () => "(0)" })
  discount: number;

  @Column("varchar", { name: "TaxCode", length: 50, default: () => "''" })
  taxCode: string;

  @Column("varchar", { name: "InvoiceType", length: 50, default: () => "''" })
  invoiceType: string;

  @Column("varchar", { name: "InvoiceNo", length: 20, default: () => "''" })
  invoiceNo: string;

  @Column("nvarchar", { name: "Summary", length: 500, default: () => "''" })
  summary: string;

  @Column("decimal", {
    name: "TotalAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  totalAmount: number;

  @Column("decimal", {
    name: "Tax",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  tax: number;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;

  @Column("varchar", { name: "Status", length: 50, default: () => "''" })
  status: string;
}
