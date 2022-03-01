import { Column, Entity, Index } from "typeorm";

@Index("PK__Vacation__4B913AC733F2E53D", ["flowKey"], { unique: true })
@Entity("VacationType", { schema: "dbo" })
export class VacationType {
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

  @Column("nvarchar", { name: "Names", length: 50 })
  names: string;

  @Column("nchar", { name: "BalanceFlag", length: 1 })
  balanceFlag: string;

  @Column("int", { name: "EffectMonth" })
  effectMonth: number;

  @Column("nchar", { name: "ControlFlag", length: 1 })
  controlFlag: string;

  @Column("nchar", { name: "CrossFlag", length: 1 })
  crossFlag: string;

  @Column("int", { name: "YearMaxHours" })
  yearMaxHours: number;

  @Column("int", { name: "MonthMaxHours" })
  monthMaxHours: number;

  @Column("int", { name: "MiniHours" })
  miniHours: number;

  @Column("nchar", { name: "IncludeVacation", length: 1 })
  includeVacation: string;

  @Column("nvarchar", { name: "GroupType", length: 200 })
  groupType: string;

  @Column("nvarchar", { name: "EffectDateFrom", length: 10 })
  effectDateFrom: string;

  @Column("nvarchar", { name: "EffectDateTo", length: 10 })
  effectDateTo: string;

  @Column("nvarchar", { name: "Memo", length: 500 })
  memo: string;
}
