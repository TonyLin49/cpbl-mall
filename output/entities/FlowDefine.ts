import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_1273C1CD", ["code"], {})
@Index("_WA_Sys_SysNo_1273C1CD", ["sysNo"], {})
@Index("PK__FlowDefi__4B913AC7DA3D2599", ["flowKey"], { unique: true })
@Entity("FlowDefine", { schema: "dbo" })
export class FlowDefine {
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

  @Column("nvarchar", { name: "FlowName", length: 200 })
  flowName: string;

  @Column("nvarchar", { name: "CloserType", length: 50 })
  closerType: string;

  @Column("nchar", { name: "CloseCanReject", length: 1 })
  closeCanReject: string;

  @Column("nvarchar", { name: "CloserValue", length: 50 })
  closerValue: string;

  @Column("nvarchar", { name: "DraftRight", length: 50 })
  draftRight: string;

  @Column("nvarchar", { name: "DraftRightValue", length: 50 })
  draftRightValue: string;

  @Column("ntext", { name: "Summary" })
  summary: string;

  @Column("ntext", { name: "CloseCanEditFields" })
  closeCanEditFields: string;

  @Column("nvarchar", { name: "CloseStepName", length: 50 })
  closeStepName: string;
}
