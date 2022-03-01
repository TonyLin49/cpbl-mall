import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_7C6F7215", ["applicant"], {})
@Index("_WA_Sys_Code_7C6F7215", ["code"], {})
@Index("_WA_Sys_CreateDept_7C6F7215", ["createDept"], {})
@Index("_WA_Sys_DeptId_7C6F7215", ["deptId"], {})
@Index("_WA_Sys_Memo_7C6F7215", ["memo"], {})
@Index("_WA_Sys_Staff_7C6F7215", ["staff"], {})
@Index("_WA_Sys_SysNo_7C6F7215", ["sysNo"], {})
@Index("_WA_Sys_TransDate_7C6F7215", ["transDate"], {})
@Index("PK__StockOut__4B913AC7843A5A98", ["flowKey"], { unique: true })
@Entity("StockOut", { schema: "dbo" })
export class StockOut {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("varchar", { name: "SysNo", length: 50, default: () => "''" })
  sysNo: string;

  @Column("varchar", { name: "Code", length: 50, default: () => "''" })
  code: string;

  @Column("varchar", { name: "CreateDept", length: 50, default: () => "''" })
  createDept: string;

  @Column("varchar", { name: "Applicant", length: 50, default: () => "''" })
  applicant: string;

  @Column("varchar", { name: "DeptId", length: 50, default: () => "''" })
  deptId: string;

  @Column("varchar", { name: "Staff", length: 50, default: () => "''" })
  staff: string;

  @Column("varchar", { name: "TransDate", length: 10, default: () => "''" })
  transDate: string;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;

  @Column("nvarchar", { name: "Status", length: 50, default: () => "''" })
  status: string;

  @Column("nvarchar", { name: "Summary", length: 500, default: () => "''" })
  summary: string;
}
