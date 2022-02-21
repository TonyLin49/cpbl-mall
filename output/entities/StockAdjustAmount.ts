import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_320C68B7", ["applicant"], {})
@Index("_WA_Sys_Code_320C68B7", ["code"], {})
@Index("_WA_Sys_SysNo_320C68B7", ["sysNo"], {})
@Index("PK__StockAdj__4B913AC7411BD45B", ["flowKey"], { unique: true })
@Entity("StockAdjustAmount", { schema: "dbo" })
export class StockAdjustAmount {
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
