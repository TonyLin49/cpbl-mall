import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_1ED998B2", ["applicant"], {})
@Index("_WA_Sys_Code_1ED998B2", ["code"], {})
@Index("_WA_Sys_DateFrom_1ED998B2", ["dateFrom"], {})
@Index("_WA_Sys_DateTo_1ED998B2", ["dateTo"], {})
@Index("_WA_Sys_SysNo_1ED998B2", ["sysNo"], {})
@Index("PK__Notice__4B913AC706EB9B56", ["flowKey"], { unique: true })
@Entity("Notice", { schema: "dbo" })
export class Notice {
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

  @Column("ntext", { name: "Summary" })
  summary: string;

  @Column("ntext", { name: "Content" })
  content: string;

  @Column("nvarchar", { name: "Appendix", length: 100 })
  appendix: string;

  @Column("nvarchar", { name: "DateFrom", length: 10 })
  dateFrom: string;

  @Column("nvarchar", { name: "DateTo", length: 10 })
  dateTo: string;

  @Column("nvarchar", { name: "LinkUrl", length: 100 })
  linkUrl: string;
}
