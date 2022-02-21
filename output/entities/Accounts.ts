import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_AccProperty_77BFCB91", ["accProperty"], {})
@Index("_WA_Sys_AccSponsor_77BFCB91", ["accSponsor"], {})
@Index("_WA_Sys_AccType_77BFCB91", ["accType"], {})
@Index("_WA_Sys_AccUserType_77BFCB91", ["accUserType"], {})
@Index("_WA_Sys_Code_77BFCB91", ["code"], {})
@Index("_WA_Sys_DorC_77BFCB91", ["dorC"], {})
@Index("_WA_Sys_IsAccCode_77BFCB91", ["isAccCode"], {})
@Index("_WA_Sys_IsReceipt_77BFCB91", ["isReceipt"], {})
@Index("_WA_Sys_IsSumCode_77BFCB91", ["isSumCode"], {})
@Index("_WA_Sys_Names_77BFCB91", ["names"], {})
@Index("_WA_Sys_ParentId_77BFCB91", ["parentId"], {})
@Index("_WA_Sys_Program_77BFCB91", ["program"], {})
@Index("_WA_Sys_ReportCode_77BFCB91", ["reportCode"], {})
@Index("_WA_Sys_SysNo_77BFCB91", ["sysNo"], {})
@Index("PK__Accounts__4B913AC749885102", ["flowKey"], { unique: true })
@Entity("Accounts", { schema: "dbo" })
export class Accounts {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "Names", length: 100 })
  names: string;

  @Column("nvarchar", { name: "BudgetCode", length: 50 })
  budgetCode: string;

  @Column("nvarchar", { name: "ParentId", length: 50 })
  parentId: string;

  @Column("nvarchar", { name: "DorC", length: 50 })
  dorC: string;

  @Column("nvarchar", { name: "AccProperty", length: 50 })
  accProperty: string;

  @Column("nchar", { name: "IsSumCode", length: 1 })
  isSumCode: string;

  @Column("nchar", { name: "IsAccCode", length: 1 })
  isAccCode: string;

  @Column("nvarchar", { name: "AccSponsor", length: 50 })
  accSponsor: string;

  @Column("nvarchar", { name: "Program", length: 200 })
  program: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nchar", { name: "IsReceipt", length: 1 })
  isReceipt: string;

  @Column("nvarchar", { name: "AccType", length: 50 })
  accType: string;

  @Column("nvarchar", { name: "AccUserType", length: 50 })
  accUserType: string;

  @Column("nvarchar", { name: "ReportCode", length: 50 })
  reportCode: string;

  @Column("nvarchar", { name: "OrderKey", length: 50 })
  orderKey: string;
}
