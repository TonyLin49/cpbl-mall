import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_0425A276", ["code"], {})
@Index("_WA_Sys_SysNo_0425A276", ["sysNo"], {})
@Index("PK__CancelSi__4B913AC77E70850C", ["flowKey"], { unique: true })
@Entity("CancelSign", { schema: "dbo" })
export class CancelSign {
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

  @Column("nvarchar", { name: "FormName", length: 50 })
  formName: string;

  @Column("nvarchar", { name: "SrcFlowKey", length: 50 })
  srcFlowKey: string;

  @Column("ntext", { name: "SrcFlowName" })
  srcFlowName: string;

  @Column("nvarchar", { name: "Reason", length: 100 })
  reason: string;
}
