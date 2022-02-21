import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_22AA2996", ["applicant"], {})
@Index("_WA_Sys_Code_22AA2996", ["code"], {})
@Index("_WA_Sys_CreateDept_22AA2996", ["createDept"], {})
@Index("_WA_Sys_Event_22AA2996", ["event"], {})
@Index("_WA_Sys_GameType_22AA2996", ["gameType"], {})
@Index("_WA_Sys_HomeTeam_22AA2996", ["homeTeam"], {})
@Index("_WA_Sys_IsCheck_22AA2996", ["isCheck"], {})
@Index("_WA_Sys_Matchday_22AA2996", ["matchday"], {})
@Index("_WA_Sys_Memo_22AA2996", ["memo"], {})
@Index("_WA_Sys_Place_22AA2996", ["place"], {})
@Index("_WA_Sys_SysNo_22AA2996", ["sysNo"], {})
@Index("_WA_Sys_TotalAmount_22AA2996", ["totalAmount"], {})
@Index("_WA_Sys_WorkType_22AA2996", ["workType"], {})
@Index("PK__Payroll__4B913AC7512BDBF3", ["flowKey"], { unique: true })
@Entity("Payroll", { schema: "dbo" })
export class Payroll {
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

  @Column("nvarchar", { name: "GameType", length: 50 })
  gameType: string;

  @Column("nvarchar", { name: "Event", length: 50 })
  event: string;

  @Column("nvarchar", { name: "Matchday", length: 10 })
  matchday: string;

  @Column("nvarchar", { name: "Hour", length: 10 })
  hour: string;

  @Column("nvarchar", { name: "Minute", length: 10 })
  minute: string;

  @Column("nvarchar", { name: "Place", length: 50 })
  place: string;

  @Column("nvarchar", { name: "HomeTeam", length: 50 })
  homeTeam: string;

  @Column("nvarchar", { name: "AwayTeam", length: 50 })
  awayTeam: string;

  @Column("nvarchar", { name: "Memo", length: 200 })
  memo: string;

  @Column("decimal", { name: "TotalAmount", precision: 18, scale: 0 })
  totalAmount: number;

  @Column("char", { name: "IsCheck", length: 1 })
  isCheck: string;

  @Column("nvarchar", { name: "WorkType", length: 50 })
  workType: string;

  @Column("decimal", { name: "TotalLaborPersonal", precision: 18, scale: 0 })
  totalLaborPersonal: number;

  @Column("decimal", { name: "TotalHealthPersonal", precision: 18, scale: 0 })
  totalHealthPersonal: number;

  @Column("decimal", { name: "TotalNetAmount", precision: 18, scale: 0 })
  totalNetAmount: number;

  @Column("decimal", { name: "TotalLabor", precision: 18, scale: 0 })
  totalLabor: number;

  @Column("decimal", { name: "TotalHealth", precision: 18, scale: 0 })
  totalHealth: number;

  @Column("decimal", { name: "TotalLaborPension", precision: 18, scale: 0 })
  totalLaborPension: number;

  @Column("varchar", { name: "UpdateUser", length: 50, default: () => "''" })
  updateUser: string;

  @Column("varchar", { name: "UpdateTime", length: 20, default: () => "''" })
  updateTime: string;
}
