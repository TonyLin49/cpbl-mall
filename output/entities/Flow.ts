import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_5BAD9CC8", ["applicant"], {})
@Index("_WA_Sys_Closed_time_5BAD9CC8", ["closedTime"], {})
@Index("_WA_Sys_CloseFlag_5BAD9CC8", ["closeFlag"], {})
@Index("_WA_Sys_Closer_id_5BAD9CC8", ["closerId"], {})
@Index("_WA_Sys_Code_5BAD9CC8", ["code"], {})
@Index("_WA_Sys_CreateDept_5BAD9CC8", ["createDept"], {})
@Index("_WA_Sys_Decide_time_5BAD9CC8", ["decideTime"], {})
@Index("_WA_Sys_DraftRight_5BAD9CC8", ["draftRight"], {})
@Index("_WA_Sys_Finished_steps_5BAD9CC8", ["finishedSteps"], {})
@Index("_WA_Sys_FlowId_5BAD9CC8", ["flowId"], {})
@Index("_WA_Sys_Form_tableName_5BAD9CC8", ["formTableName"], {})
@Index("_WA_Sys_Signer_id_5BAD9CC8", ["signerId"], {})
@Index("_WA_Sys_Signer_name_5BAD9CC8", ["signerName"], {})
@Index("_WA_Sys_SrcSigner_id_5BAD9CC8", ["srcSignerId"], {})
@Index("_WA_Sys_Status_5BAD9CC8", ["status"], {})
@Index("_WA_Sys_SysNo_5BAD9CC8", ["sysNo"], {})
@Index("PK__Flow__4B913AC7717477F0", ["flowKey"], { unique: true })
@Entity("Flow", { schema: "dbo" })
export class Flow {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "FlowId", length: 50 })
  flowId: string;

  @Column("nvarchar", { name: "Flow_name", length: 500 })
  flowName: string;

  @Column("nvarchar", { name: "Applicant_name", length: 50 })
  applicantName: string;

  @Column("nvarchar", { name: "Create_time", length: 20 })
  createTime: string;

  @Column("nvarchar", { name: "SrcSigner_id", length: 50 })
  srcSignerId: string;

  @Column("nvarchar", { name: "Signer_id", length: 50 })
  signerId: string;

  @Column("nvarchar", { name: "Signer_name", length: 50 })
  signerName: string;

  @Column("nvarchar", { name: "Closer_id", length: 50 })
  closerId: string;

  @Column("nvarchar", { name: "Closer_name", length: 50 })
  closerName: string;

  @Column("nvarchar", { name: "Closed_time", length: 20 })
  closedTime: string;

  @Column("nvarchar", { name: "Decider_id", length: 50 })
  deciderId: string;

  @Column("nvarchar", { name: "Decider_name", length: 50 })
  deciderName: string;

  @Column("nvarchar", { name: "Decide_time", length: 50 })
  decideTime: string;

  @Column("int", { name: "Total_steps" })
  totalSteps: number;

  @Column("int", { name: "Finished_steps" })
  finishedSteps: number;

  @Column("nvarchar", { name: "Status", length: 50 })
  status: string;

  @Column("nvarchar", { name: "Form_tableName", length: 50 })
  formTableName: string;

  @Column("nchar", { name: "CloseFlag", length: 1 })
  closeFlag: string;

  @Column("nvarchar", { name: "DraftRight", length: 50 })
  draftRight: string;
}
