import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_BudgetControler_0CBAE877", ["budgetControler"], {})
@Index("_WA_Sys_Code_0CBAE877", ["code"], {})
@Index("_WA_Sys_Company_0CBAE877", ["company"], {})
@Index("_WA_Sys_DeptName_0CBAE877", ["deptName"], {})
@Index("_WA_Sys_Heads_0CBAE877", ["heads"], {})
@Index("_WA_Sys_ParentId_0CBAE877", ["parentId"], {})
@Index("_WA_Sys_SysNo_0CBAE877", ["sysNo"], {})
@Index("PK__Departme__4B913AC7FFED610E", ["flowKey"], { unique: true })
@Entity("Department", { schema: "dbo" })
export class Department {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "DeptName", length: 50 })
  deptName: string;

  @Column("nvarchar", { name: "ParentId", length: 50 })
  parentId: string;

  @Column("nvarchar", { name: "Heads", length: 50 })
  heads: string;

  @Column("nvarchar", { name: "DeptCode", length: 50 })
  deptCode: string;

  @Column("nchar", { name: "CanApprove", length: 1 })
  canApprove: string;

  @Column("nvarchar", { name: "BudgetControler", length: 50 })
  budgetControler: string;

  @Column("nchar", { name: "SubDeptFlag", length: 1 })
  subDeptFlag: string;

  @Column("nvarchar", { name: "Company", length: 50 })
  company: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "OrderKey", length: 10 })
  orderKey: string;

  @Column("nchar", { name: "IsBudgetControl", length: 1 })
  isBudgetControl: string;
}
