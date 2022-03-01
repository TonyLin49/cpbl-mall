import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_2818EA29", ["applicant"], {})
@Index("_WA_Sys_Code_2818EA29", ["code"], {})
@Index("_WA_Sys_CreateDept_2818EA29", ["createDept"], {})
@Index("_WA_Sys_CurrentArea_2818EA29", ["currentArea"], {})
@Index("_WA_Sys_CurrentInvoiceNo_2818EA29", ["currentInvoiceNo"], {})
@Index("_WA_Sys_DeptId_2818EA29", ["deptId"], {})
@Index("_WA_Sys_EndDate_2818EA29", ["endDate"], {})
@Index("_WA_Sys_ForNotTodayUsed_2818EA29", ["forNotTodayUsed"], {})
@Index("_WA_Sys_ForNotUploadXmlUsed_2818EA29", ["forNotUploadXmlUsed"], {})
@Index("_WA_Sys_InvoiceType_2818EA29", ["invoiceType"], {})
@Index("_WA_Sys_Month_2818EA29", ["month"], {})
@Index("_WA_Sys_StartDate_2818EA29", ["startDate"], {})
@Index("_WA_Sys_SysNo_2818EA29", ["sysNo"], {})
@Index("_WA_Sys_WordTrack_2818EA29", ["wordTrack"], {})
@Index("_WA_Sys_Year_2818EA29", ["year"], {})
@Index("PK__InvoiceC__4B913AC708620C4B", ["flowKey"], { unique: true })
@Entity("InvoiceControl", { schema: "dbo" })
export class InvoiceControl {
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

  @Column("varchar", { name: "Year", length: 10, default: () => "''" })
  year: string;

  @Column("varchar", { name: "Month", length: 10, default: () => "''" })
  month: string;

  @Column("varchar", { name: "DeptId", length: 50, default: () => "''" })
  deptId: string;

  @Column("varchar", { name: "StartDate", length: 10, default: () => "''" })
  startDate: string;

  @Column("varchar", { name: "EndDate", length: 10, default: () => "''" })
  endDate: string;

  @Column("varchar", { name: "InvoiceType", length: 50, default: () => "''" })
  invoiceType: string;

  @Column("varchar", { name: "WordTrack", length: 10, default: () => "''" })
  wordTrack: string;

  @Column("int", { name: "CurrentArea", default: () => "(0)" })
  currentArea: number;

  @Column("varchar", {
    name: "CurrentInvoiceNo",
    length: 10,
    default: () => "''",
  })
  currentInvoiceNo: string;

  @Column("char", {
    name: "ForNotUploadXmlUsed",
    length: 1,
    default: () => "''",
  })
  forNotUploadXmlUsed: string;

  @Column("char", { name: "ForNotTodayUsed", length: 1, default: () => "''" })
  forNotTodayUsed: string;
}
