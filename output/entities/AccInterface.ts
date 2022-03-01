import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Accounts_C_75D7831F", ["accountsC"], {})
@Index("_WA_Sys_Accounts_D_75D7831F", ["accountsD"], {})
@Index("_WA_Sys_Code_75D7831F", ["code"], {})
@Index("_WA_Sys_FieldName_75D7831F", ["fieldName"], {})
@Index("_WA_Sys_ProgramCode_75D7831F", ["programCode"], {})
@Index("_WA_Sys_SysNo_75D7831F", ["sysNo"], {})
@Index("_WA_Sys_TypeCode_75D7831F", ["typeCode"], {})
@Index("_WA_Sys_TypeValue_75D7831F", ["typeValue"], {})
@Index("PK__AccInter__4B913AC71CFEC766", ["flowKey"], { unique: true })
@Entity("AccInterface", { schema: "dbo" })
export class AccInterface {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "ProgramCode", length: 50 })
  programCode: string;

  @Column("nvarchar", { name: "TypeCode", length: 50 })
  typeCode: string;

  @Column("nvarchar", { name: "TypeValue", length: 50 })
  typeValue: string;

  @Column("nvarchar", { name: "FieldName", length: 50 })
  fieldName: string;

  @Column("nvarchar", { name: "Accounts_C", length: 50 })
  accountsC: string;

  @Column("nvarchar", { name: "Accounts_D", length: 50 })
  accountsD: string;

  @Column("nvarchar", { name: "Memo", length: 200 })
  memo: string;

  @Column("nvarchar", { name: "DeptField", length: 50 })
  deptField: string;

  @Column("nvarchar", { name: "ProjectField", length: 50 })
  projectField: string;
}
