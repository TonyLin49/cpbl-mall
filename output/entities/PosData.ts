import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_37461F20", ["applicant"], {})
@Index("_WA_Sys_Code_37461F20", ["code"], {})
@Index("_WA_Sys_CreateDept_37461F20", ["createDept"], {})
@Index("_WA_Sys_InvoiceNoEnd_37461F20", ["invoiceNoEnd"], {})
@Index("_WA_Sys_InvoiceNoFrom_37461F20", ["invoiceNoFrom"], {})
@Index("_WA_Sys_ShippedNo_37461F20", ["shippedNo"], {})
@Index("_WA_Sys_SysNo_37461F20", ["sysNo"], {})
@Index("PK__PosData__4B913AC70F0C3B3C", ["flowKey"], { unique: true })
@Entity("PosData", { schema: "dbo" })
export class PosData {
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

  @Column("varchar", { name: "ExcelFile", length: 100, default: () => "''" })
  excelFile: string;

  @Column("varchar", {
    name: "InvoiceDateFrom",
    length: 10,
    default: () => "''",
  })
  invoiceDateFrom: string;

  @Column("varchar", {
    name: "InvoiceDateEnd",
    length: 10,
    default: () => "''",
  })
  invoiceDateEnd: string;

  @Column("varchar", { name: "InvoiceNoFrom", length: 20, default: () => "''" })
  invoiceNoFrom: string;

  @Column("varchar", { name: "InvoiceNoEnd", length: 20, default: () => "''" })
  invoiceNoEnd: string;

  @Column("varchar", { name: "ShippedNo", length: 50, default: () => "''" })
  shippedNo: string;

  @Column("decimal", {
    name: "NetAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  netAmount: number;

  @Column("decimal", {
    name: "Tax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  tax: number;

  @Column("decimal", {
    name: "TotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  totalAmount: number;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;
}
