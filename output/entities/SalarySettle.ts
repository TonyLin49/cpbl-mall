import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_AccYear_08C03A61", ["accYear"], {})
@Index("_WA_Sys_Code_08C03A61", ["code"], {})
@Index("_WA_Sys_Month_08C03A61", ["month"], {})
@Index("_WA_Sys_SettleType_08C03A61", ["settleType"], {})
@Index("_WA_Sys_SysNo_08C03A61", ["sysNo"], {})
@Index("PK__SalarySe__4B913AC74FD24F16", ["flowKey"], { unique: true })
@Entity("SalarySettle", { schema: "dbo" })
export class SalarySettle {
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

  @Column("varchar", { name: "AccYear", length: 50, default: () => "''" })
  accYear: string;

  @Column("varchar", { name: "Month", length: 10, default: () => "''" })
  month: string;

  @Column("varchar", { name: "SettleType", length: 50, default: () => "''" })
  settleType: string;

  @Column("decimal", {
    name: "TotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  totalAmount: number;
}
