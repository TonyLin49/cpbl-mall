import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_5D80D6A1", ["applicant"], {})
@Index("_WA_Sys_Code_5D80D6A1", ["code"], {})
@Index("_WA_Sys_CreateDept_5D80D6A1", ["createDept"], {})
@Index("_WA_Sys_InvoiceDate_5D80D6A1", ["invoiceDate"], {})
@Index("_WA_Sys_InvoiceType_5D80D6A1", ["invoiceType"], {})
@Index("_WA_Sys_IsInvalid_5D80D6A1", ["isInvalid"], {})
@Index("_WA_Sys_SysNo_5D80D6A1", ["sysNo"], {})
@Index("PK__InvoiceL__4B913AC7B6C42306", ["flowKey"], { unique: true })
@Entity("InvoiceLog", { schema: "dbo" })
export class InvoiceLog {
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

  @Column("varchar", { name: "InvoiceType", length: 50, default: () => "''" })
  invoiceType: string;

  @Column("varchar", { name: "InvoiceDate", length: 10, default: () => "''" })
  invoiceDate: string;

  @Column("varchar", { name: "SrcTable", length: 50, default: () => "''" })
  srcTable: string;

  @Column("varchar", { name: "SrcKey", length: 50, default: () => "''" })
  srcKey: string;

  @Column("char", { name: "IsInvalid", length: 1, default: () => "' '" })
  isInvalid: string;

  @Column("varchar", { name: "CreateTime", length: 20, default: () => "''" })
  createTime: string;
}
