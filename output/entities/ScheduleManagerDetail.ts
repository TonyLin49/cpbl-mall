import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Seq_no_4222D4EF", ["seqNo"], {})
@Index("PK__Schedule__793933C2AEACB065", ["flowKey", "seqNo"], { unique: true })
@Entity("ScheduleManager_detail", { schema: "dbo" })
export class ScheduleManagerDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "ScheduleName", length: 50 })
  scheduleName: string;

  @Column("nvarchar", { name: "ScheduleApp", length: 50 })
  scheduleApp: string;

  @Column("nvarchar", { name: "ScheduleInitDate", length: 20 })
  scheduleInitDate: string;

  @Column("nvarchar", { name: "ScheduleFinalDate", length: 20 })
  scheduleFinalDate: string;

  @Column("decimal", { name: "ScheduleRate", precision: 10, scale: 0 })
  scheduleRate: number;
}
