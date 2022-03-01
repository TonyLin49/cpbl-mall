import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Accounts_C_4D94879B", ["accountsC"], {})
@Index("_WA_Sys_Accounts_D_4D94879B", ["accountsD"], {})
@Index("_WA_Sys_Assistants_4D94879B", ["assistants"], {})
@Index("_WA_Sys_Code_4D94879B", ["code"], {})
@Index("_WA_Sys_Controler_4D94879B", ["controler"], {})
@Index("_WA_Sys_CrossFlag_4D94879B", ["crossFlag"], {})
@Index("_WA_Sys_DateFrom_4D94879B", ["dateFrom"], {})
@Index("_WA_Sys_DateTo_4D94879B", ["dateTo"], {})
@Index("_WA_Sys_GroupCode_4D94879B", ["groupCode"], {})
@Index("_WA_Sys_Memo_4D94879B", ["memo"], {})
@Index("_WA_Sys_Names_4D94879B", ["names"], {})
@Index("_WA_Sys_ParentId_4D94879B", ["parentId"], {})
@Index("_WA_Sys_Sponsor_4D94879B", ["sponsor"], {})
@Index("_WA_Sys_SysNo_4D94879B", ["sysNo"], {})
@Index("PK__UserCate__4B913AC70DB9D2AF", ["flowKey"], { unique: true })
@Entity("UserCategory", { schema: "dbo" })
export class UserCategory {
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

  @Column("nvarchar", { name: "Names", length: 50 })
  names: string;

  @Column("nvarchar", { name: "GroupCode", length: 50 })
  groupCode: string;

  @Column("nvarchar", { name: "ParentId", length: 50 })
  parentId: string;

  @Column("decimal", { name: "Rate", precision: 18, scale: 6 })
  rate: number;

  @Column("nvarchar", { name: "DateFrom", length: 10 })
  dateFrom: string;

  @Column("nvarchar", { name: "DateTo", length: 10 })
  dateTo: string;

  @Column("nvarchar", { name: "Assistants", length: 50 })
  assistants: string;

  @Column("nvarchar", { name: "Sponsor", length: 50 })
  sponsor: string;

  @Column("nvarchar", { name: "Controler", length: 50 })
  controler: string;

  @Column("nvarchar", { name: "Accounts_C", length: 50 })
  accountsC: string;

  @Column("nchar", { name: "GroupControl", length: 1 })
  groupControl: string;

  @Column("nvarchar", { name: "Memo", length: 100 })
  memo: string;

  @Column("nchar", { name: "CrossFlag", length: 1 })
  crossFlag: string;

  @Column("int", { name: "EffectMonth" })
  effectMonth: number;

  @Column("nvarchar", { name: "Accounts_D", length: 50 })
  accountsD: string;
}
