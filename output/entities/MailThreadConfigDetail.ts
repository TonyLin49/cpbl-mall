import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Seq_no_1DE57479", ["seqNo"], {})
@Index("PK__MailThre__793933C2E2B6C48D", ["flowKey", "seqNo"], { unique: true })
@Entity("MailThreadConfig_detail", { schema: "dbo" })
export class MailThreadConfigDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "SrcTable", length: 50 })
  srcTable: string;

  @Column("nvarchar", { name: "SrcFlowKey", length: 50 })
  srcFlowKey: string;

  @Column("ntext", { name: "MailTo" })
  mailTo: string;

  @Column("ntext", { name: "CcTo" })
  ccTo: string;

  @Column("ntext", { name: "BccTo" })
  bccTo: string;

  @Column("ntext", { name: "MailTitle" })
  mailTitle: string;

  @Column("ntext", { name: "Content" })
  content: string;

  @Column("ntext", { name: "AttachFile" })
  attachFile: string;

  @Column("nvarchar", { name: "MailTime", length: 20 })
  mailTime: string;

  @Column("nchar", { name: "Scheduled", length: 1 })
  scheduled: string;
}
