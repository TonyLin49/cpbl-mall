import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_24927208", ["applicant"], {})
@Index("_WA_Sys_Code_24927208", ["code"], {})
@Index("_WA_Sys_CollectionDate_24927208", ["collectionDate"], {})
@Index("_WA_Sys_CollectionType_24927208", ["collectionType"], {})
@Index("_WA_Sys_CreateDept_24927208", ["createDept"], {})
@Index("_WA_Sys_Event_24927208", ["event"], {})
@Index("_WA_Sys_GameType_24927208", ["gameType"], {})
@Index("_WA_Sys_IsCheck_24927208", ["isCheck"], {})
@Index("_WA_Sys_SysNo_24927208", ["sysNo"], {})
@Index("PK__PayrollS__4B913AC77990C559", ["flowKey"], { unique: true })
@Entity("PayrollSum", { schema: "dbo" })
export class PayrollSum {
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

  @Column("nvarchar", { name: "CollectionDate", length: 10 })
  collectionDate: string;

  @Column("nvarchar", { name: "CollectionType", length: 50 })
  collectionType: string;

  @Column("nvarchar", { name: "GameType", length: 50 })
  gameType: string;

  @Column("nvarchar", { name: "Event", length: 50 })
  event: string;

  @Column("nvarchar", { name: "Collections", length: 500 })
  collections: string;

  @Column("decimal", { name: "DetailCount", precision: 18, scale: 0 })
  detailCount: number;

  @Column("decimal", { name: "TotalAmount", precision: 18, scale: 0 })
  totalAmount: number;

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

  @Column("char", { name: "IsCheck", length: 1, default: () => "''" })
  isCheck: string;

  @Column("varchar", { name: "UpdateUser", length: 50, default: () => "''" })
  updateUser: string;

  @Column("varchar", { name: "UpdateTime", length: 20, default: () => "''" })
  updateTime: string;
}
