import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_31EC6D26", ["code"], {})
@Index("_WA_Sys_DateFrom_31EC6D26", ["dateFrom"], {})
@Index("_WA_Sys_DateTo_31EC6D26", ["dateTo"], {})
@Index("_WA_Sys_DeptId_31EC6D26", ["deptId"], {})
@Index("_WA_Sys_Names_31EC6D26", ["names"], {})
@Index("_WA_Sys_SysNo_31EC6D26", ["sysNo"], {})
@Index("PK__Project__4B913AC7E21FBE60", ["flowKey"], { unique: true })
@Entity("Project", { schema: "dbo" })
export class Project {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "Names", length: 100 })
  names: string;

  @Column("nvarchar", { name: "DeptId", length: 50 })
  deptId: string;

  @Column("nvarchar", { name: "Leader", length: 50 })
  leader: string;

  @Column("nvarchar", { name: "DateFrom", length: 10 })
  dateFrom: string;

  @Column("nvarchar", { name: "DateTo", length: 10 })
  dateTo: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "BudgetControler", length: 50 })
  budgetControler: string;

  @Column("nchar", { name: "IsBudgetControl", length: 1 })
  isBudgetControl: string;
}
