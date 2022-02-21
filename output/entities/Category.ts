import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_060DEAE8", ["code"], {})
@Index("_WA_Sys_Controler_060DEAE8", ["controler"], {})
@Index("_WA_Sys_GroupCode_060DEAE8", ["groupCode"], {})
@Index("_WA_Sys_Names_060DEAE8", ["names"], {})
@Index("_WA_Sys_Sponsor_060DEAE8", ["sponsor"], {})
@Index("_WA_Sys_SysNo_060DEAE8", ["sysNo"], {})
@Index("PK__Category__4B913AC7C7F4C1C9", ["flowKey"], { unique: true })
@Entity("Category", { schema: "dbo" })
export class Category {
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

  @Column("nvarchar", { name: "GroupCode", length: 50 })
  groupCode: string;

  @Column("nvarchar", { name: "Names", length: 50 })
  names: string;

  @Column("nvarchar", { name: "OrderSeq", length: 10 })
  orderSeq: string;

  @Column("nchar", { name: "GroupControl", length: 1 })
  groupControl: string;

  @Column("nvarchar", { name: "Controler", length: 50 })
  controler: string;

  @Column("nvarchar", { name: "Sponsor", length: 50 })
  sponsor: string;

  @Column("nvarchar", { name: "Accounts", length: 50 })
  accounts: string;

  @Column("nchar", { name: "CrossFlag", length: 1 })
  crossFlag: string;

  @Column("nvarchar", { name: "DateFrom", length: 10 })
  dateFrom: string;

  @Column("nvarchar", { name: "DateTo", length: 10 })
  dateTo: string;
}
