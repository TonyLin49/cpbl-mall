import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Form_tableName_145C0A3F", ["formTableName"], {})
@Index("_WA_Sys_ParentId_145C0A3F", ["parentId"], {})
@Index("_WA_Sys_Step_145C0A3F", ["step"], {})
@Index("_WA_Sys_SysNo_145C0A3F", ["sysNo"], {})
@Index("PK__FlowStep__4B913AC770169426", ["flowKey"], { unique: true })
@Entity("FlowSteps", { schema: "dbo" })
export class FlowSteps {
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

  @Column("nvarchar", { name: "ParentId", length: 50 })
  parentId: string;

  @Column("int", { name: "Step" })
  step: number;

  @Column("nvarchar", { name: "StepName", length: 100 })
  stepName: string;

  @Column("nvarchar", { name: "Signer_id", length: 50 })
  signerId: string;

  @Column("nvarchar", { name: "Signer_name", length: 50 })
  signerName: string;

  @Column("nvarchar", { name: "Form_tableName", length: 50 })
  formTableName: string;

  @Column("nchar", { name: "ResetFlow", length: 1 })
  resetFlow: string;

  @Column("nchar", { name: "CanDecided", length: 1 })
  canDecided: string;

  @Column("nvarchar", { name: "CanEditField", length: 200 })
  canEditField: string;

  @Column("nchar", { name: "Countersign", length: 50 })
  countersign: string;

  @Column("nchar", { name: "IsSendMessage", length: 1 })
  isSendMessage: string;

  @Column("nvarchar", { name: "MessageValue", length: 200 })
  messageValue: string;
}
