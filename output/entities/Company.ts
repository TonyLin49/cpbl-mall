import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_07020F21", ["code"], {})
@Index("_WA_Sys_IsGeneralLedger_07020F21", ["isGeneralLedger"], {})
@Index("_WA_Sys_SysNo_07020F21", ["sysNo"], {})
@Index("PK__Company__4B913AC7A1161D20", ["flowKey"], { unique: true })
@Entity("Company", { schema: "dbo" })
export class Company {
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

  @Column("nvarchar", { name: "VatNo", length: 20 })
  vatNo: string;

  @Column("nvarchar", { name: "TaxNo", length: 20 })
  taxNo: string;

  @Column("nvarchar", { name: "Names", length: 50 })
  names: string;

  @Column("nvarchar", { name: "InvoiceAddress", length: 100 })
  invoiceAddress: string;

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

  @Column("nchar", { name: "IsGeneralLedger", length: 1 })
  isGeneralLedger: string;

  @Column("nvarchar", { name: "TaxOrgNo", length: 20 })
  taxOrgNo: string;
}
