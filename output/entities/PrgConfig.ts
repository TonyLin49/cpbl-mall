import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_SysNo_29572725", ["sysNo"], {})
@Index("PK__PrgConfi__4B913AC7CD21B13F", ["flowKey"], { unique: true })
@Entity("PrgConfig", { schema: "dbo" })
export class PrgConfig {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("varchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("varchar", { name: "Code", length: 50 })
  code: string;

  @Column("varchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("varchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "ProjectName", length: 50 })
  projectName: string;

  @Column("nvarchar", { name: "LocalProgramName", length: 50 })
  localProgramName: string;

  @Column("nvarchar", { name: "LocalFlowKeyName", length: 50 })
  localFlowKeyName: string;

  @Column("varchar", { name: "UsePrintFunction", length: 50 })
  usePrintFunction: string;

  @Column("char", { name: "HasExportFunction", length: 1 })
  hasExportFunction: string;

  @Column("nvarchar", { name: "LocalDetailTitle", length: 50 })
  localDetailTitle: string;

  @Column("varchar", { name: "DocUrl", length: 100 })
  docUrl: string;

  @Column("varchar", { name: "ParentId", length: 50, default: () => "''" })
  parentId: string;
}
