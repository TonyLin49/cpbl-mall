import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_BindFlow_30F848ED", ["bindFlow"], {})
@Index("_WA_Sys_Code_30F848ED", ["code"], {})
@Index("_WA_Sys_IsMenu_30F848ED", ["isMenu"], {})
@Index("_WA_Sys_ParentId_30F848ED", ["parentId"], {})
@Index("_WA_Sys_ProgramName_30F848ED", ["programName"], {})
@Index("_WA_Sys_SysNo_30F848ED", ["sysNo"], {})
@Index("PK__ProgramS__4B913AC7457A2B9C", ["flowKey"], { unique: true })
@Entity("ProgramStructure", { schema: "dbo" })
export class ProgramStructure {
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

  @Column("nvarchar", { name: "ProgramName", length: 100 })
  programName: string;

  @Column("nchar", { name: "IsMenu", length: 1 })
  isMenu: string;

  @Column("int", { name: "OrderKey" })
  orderKey: number;

  @Column("nvarchar", { name: "ProgramUrl", length: 200 })
  programUrl: string;

  @Column("nchar", { name: "BindFlow", length: 1 })
  bindFlow: string;

  @Column("nvarchar", { name: "FlowId", length: 50 })
  flowId: string;

  @Column("nchar", { name: "SystemEncode", length: 1 })
  systemEncode: string;

  @Column("nvarchar", { name: "BeginCode", length: 10 })
  beginCode: string;

  @Column("nvarchar", { name: "ConnectChar", length: 10 })
  connectChar: string;

  @Column("int", { name: "EndNoLength" })
  endNoLength: number;

  @Column("nvarchar", { name: "EncodeRule", length: 50 })
  encodeRule: string;

  @Column("nvarchar", { name: "OnlineHelp", length: 100 })
  onlineHelp: string;

  @Column("nchar", { name: "LogInsert", length: 1 })
  logInsert: string;

  @Column("nchar", { name: "LogUpdate", length: 1 })
  logUpdate: string;

  @Column("nchar", { name: "LogDelete", length: 1 })
  logDelete: string;

  @Column("nchar", { name: "LogPrint", length: 1 })
  logPrint: string;

  @Column("nchar", { name: "LogExport", length: 1 })
  logExport: string;
}
