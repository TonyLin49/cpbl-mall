import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_2B4A5C8F", ["code"], {})
@Index("_WA_Sys_EndDate_2B4A5C8F", ["endDate"], {})
@Index("_WA_Sys_StartDate_2B4A5C8F", ["startDate"], {})
@Index("_WA_Sys_SysNo_2B4A5C8F", ["sysNo"], {})
@Index("PK__AccPerio__4B913AC7F57DC81F", ["flowKey"], { unique: true })
@Entity("AccPeriod", { schema: "dbo" })
export class AccPeriod {
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

  @Column("nvarchar", { name: "Names", length: 50, default: () => "''" })
  names: string;

  @Column("varchar", { name: "StartDate", length: 10, default: () => "''" })
  startDate: string;

  @Column("varchar", { name: "EndDate", length: 10, default: () => "''" })
  endDate: string;

  @Column("char", { name: "IsClosed", length: 1, default: () => "' '" })
  isClosed: string;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;
}
