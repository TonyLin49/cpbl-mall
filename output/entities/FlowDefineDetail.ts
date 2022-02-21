import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Seq_no_1367E606", ["seqNo"], {})
@Index("PK__FlowDefi__793933C2E46A025D", ["flowKey", "seqNo"], { unique: true })
@Entity("FlowDefine_detail", { schema: "dbo" })
export class FlowDefineDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("int", { name: "Step" })
  step: number;

  @Column("nvarchar", { name: "StepName", length: 100 })
  stepName: string;

  @Column("nvarchar", { name: "SignType", length: 50 })
  signType: string;

  @Column("nvarchar", { name: "SignValue", length: 50 })
  signValue: string;

  @Column("nchar", { name: "IsNecessary", length: 1 })
  isNecessary: string;

  @Column("nchar", { name: "CanDecided", length: 1 })
  canDecided: string;

  @Column("nchar", { name: "DefaultSkip", length: 1 })
  defaultSkip: string;

  @Column("nvarchar", { name: "SkipValue", length: 200 })
  skipValue: string;

  @Column("nvarchar", { name: "DecidedValue", length: 200 })
  decidedValue: string;

  @Column("nchar", { name: "ResetFlow", length: 1 })
  resetFlow: string;

  @Column("nvarchar", { name: "CanEditField", length: 200 })
  canEditField: string;

  @Column("nvarchar", { name: "Countersign", length: 50 })
  countersign: string;

  @Column("nchar", { name: "IsSendMessage", length: 1 })
  isSendMessage: string;

  @Column("nvarchar", { name: "MessageValue", length: 200 })
  messageValue: string;
}
