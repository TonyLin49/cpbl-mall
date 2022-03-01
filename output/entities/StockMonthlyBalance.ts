import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_45544755", ["applicant"], {})
@Index("_WA_Sys_Code_45544755", ["code"], {})
@Index("_WA_Sys_CurrentMonth_45544755", ["currentMonth"], {})
@Index("_WA_Sys_CurrentYear_45544755", ["currentYear"], {})
@Index("_WA_Sys_NextMonth_45544755", ["nextMonth"], {})
@Index("_WA_Sys_NextYear_45544755", ["nextYear"], {})
@Index("_WA_Sys_SysNo_45544755", ["sysNo"], {})
@Index("PK__StockMon__4B913AC7B5126BA0", ["flowKey"], { unique: true })
@Entity("StockMonthlyBalance", { schema: "dbo" })
export class StockMonthlyBalance {
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

  @Column("varchar", { name: "CurrentYear", length: 10, default: () => "''" })
  currentYear: string;

  @Column("varchar", { name: "CurrentMonth", length: 10, default: () => "''" })
  currentMonth: string;

  @Column("varchar", { name: "NextYear", length: 10, default: () => "''" })
  nextYear: string;

  @Column("varchar", { name: "NextMonth", length: 10, default: () => "''" })
  nextMonth: string;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;
}
