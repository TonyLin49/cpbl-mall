import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_09DE7BCC", ["code"], {})
@Index("_WA_Sys_CreateDept_09DE7BCC", ["createDept"], {})
@Index("_WA_Sys_Names_09DE7BCC", ["names"], {})
@Index("_WA_Sys_NotUploadInvoiceXml_09DE7BCC", ["notUploadInvoiceXml"], {})
@Index("_WA_Sys_SysNo_09DE7BCC", ["sysNo"], {})
@Index("_WA_Sys_VatNo_09DE7BCC", ["vatNo"], {})
@Index("PK__Customer__4B913AC7CE5808F0", ["flowKey"], { unique: true })
@Entity("Customer", { schema: "dbo" })
export class Customer {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("varchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("varchar", { name: "Code", length: 50 })
  code: string;

  @Column("varchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("varchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "Names", length: 100 })
  names: string;

  @Column("varchar", { name: "CustomerType", length: 50 })
  customerType: string;

  @Column("varchar", { name: "Country", length: 50 })
  country: string;

  @Column("varchar", { name: "Area", length: 50 })
  area: string;

  @Column("nvarchar", { name: "InvoiceAddress", length: 100 })
  invoiceAddress: string;

  @Column("varchar", { name: "EnglishName", length: 100 })
  englishName: string;

  @Column("varchar", { name: "EnglishAddress", length: 100 })
  englishAddress: string;

  @Column("nvarchar", { name: "ResponsiblePersons", length: 50 })
  responsiblePersons: string;

  @Column("varchar", { name: "Tel", length: 20 })
  tel: string;

  @Column("varchar", { name: "Fax", length: 20 })
  fax: string;

  @Column("varchar", { name: "Employee", length: 50 })
  employee: string;

  @Column("varchar", { name: "PaymentType", length: 50 })
  paymentType: string;

  @Column("varchar", { name: "Currency", length: 50 })
  currency: string;

  @Column("nvarchar", { name: "TradeType", length: 50, default: () => "''" })
  tradeType: string;

  @Column("nvarchar", { name: "Memo", length: 200 })
  memo: string;

  @Column("varchar", { name: "VatNo", length: 20 })
  vatNo: string;

  @Column("varchar", { name: "TaxNo", length: 50, default: () => "''" })
  taxNo: string;

  @Column("varchar", { name: "Shipping", length: 50, default: () => "''" })
  shipping: string;

  @Column("varchar", { name: "InvoiceType", length: 50, default: () => "''" })
  invoiceType: string;

  @Column("decimal", {
    name: "Credits",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  credits: number;

  @Column("char", {
    name: "NotUploadInvoiceXml",
    length: 1,
    default: () => "''",
  })
  notUploadInvoiceXml: string;

  @Column("nvarchar", {
    name: "ContactPerson",
    length: 20,
    default: () => "''",
  })
  contactPerson: string;

  @Column("varchar", { name: "ContactPhone", length: 20, default: () => "''" })
  contactPhone: string;

  @Column("varchar", { name: "TaxCode", length: 50, default: () => "''" })
  taxCode: string;
}
