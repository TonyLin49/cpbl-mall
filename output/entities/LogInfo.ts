import { Column, Entity } from "typeorm";

@Entity("LogInfo", { schema: "dbo" })
export class LogInfo {
  @Column("nvarchar", { name: "flowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "sysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "createDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "action", length: 50 })
  action: string;

  @Column("nvarchar", { name: "srcFlowKey", length: 50 })
  srcFlowKey: string;

  @Column("nvarchar", { name: "updateAccount", length: 50 })
  updateAccount: string;

  @Column("nvarchar", { name: "updateUserName", length: 50 })
  updateUserName: string;

  @Column("nvarchar", { name: "srcTable", length: 50 })
  srcTable: string;

  @Column("nvarchar", { name: "updateTime", length: 20 })
  updateTime: string;

  @Column("ntext", { name: "actionInfo" })
  actionInfo: string;
}
