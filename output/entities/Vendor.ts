import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_4F7CD00D", ["applicant"], {})
@Index("_WA_Sys_Code_4F7CD00D", ["code"], {})
@Index("_WA_Sys_CreateDept_4F7CD00D", ["createDept"], {})
@Index("_WA_Sys_Names_4F7CD00D", ["names"], {})
@Index("_WA_Sys_SysNo_4F7CD00D", ["sysNo"], {})
@Index("_WA_Sys_VatNo_4F7CD00D", ["vatNo"], {})
@Index("_WA_Sys_VendorType_4F7CD00D", ["vendorType"], {})
@Index("PK__Vendor__4B913AC70D42BB6A", ["flowKey"], { unique: true })
@Entity("Vendor", { schema: "dbo" })
export class Vendor {
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

  @Column("nvarchar", { name: "Names", length: 100 })
  names: string;

  @Column("nvarchar", { name: "Country", length: 50 })
  country: string;

  @Column("nvarchar", { name: "Area", length: 50 })
  area: string;

  @Column("nvarchar", { name: "Address", length: 100 })
  address: string;

  @Column("nvarchar", { name: "EnglishName", length: 100 })
  englishName: string;

  @Column("nvarchar", { name: "EnglishAddress", length: 100 })
  englishAddress: string;

  @Column("nvarchar", { name: "ResponsiblePersons", length: 50 })
  responsiblePersons: string;

  @Column("nvarchar", { name: "Tel", length: 20 })
  tel: string;

  @Column("nvarchar", { name: "Fax", length: 20 })
  fax: string;

  @Column("nvarchar", { name: "BankNo", length: 50 })
  bankNo: string;

  @Column("nvarchar", { name: "AccountName", length: 50 })
  accountName: string;

  @Column("nvarchar", { name: "BankAccount", length: 50 })
  bankAccount: string;

  @Column("nvarchar", { name: "PaymentType", length: 50 })
  paymentType: string;

  @Column("nvarchar", { name: "Currency", length: 50 })
  currency: string;

  @Column("nvarchar", { name: "TradeType", length: 50 })
  tradeType: string;

  @Column("nvarchar", { name: "Memo", length: 200 })
  memo: string;

  @Column("nvarchar", { name: "VatNo", length: 20 })
  vatNo: string;

  @Column("varchar", { name: "VendorType", length: 50, default: () => "''" })
  vendorType: string;
}
