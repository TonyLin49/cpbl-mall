import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_EmpId_7B663F43", ["empId"], {})
@Index("_WA_Sys_Seq_no_7B663F43", ["seqNo"], {})
@Index("_WA_Sys_SettleType_7B663F43", ["settleType"], {})
@Index("_WA_Sys_TotalAmount_7B663F43", ["totalAmount"], {})
@Index("PK__SalarySe__793933C209496464", ["flowKey", "seqNo"], { unique: true })
@Entity("SalarySettle_detail", { schema: "dbo" })
export class SalarySettleDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("varchar", { name: "DeptId", length: 50, default: () => "''" })
  deptId: string;

  @Column("varchar", { name: "EmpId", length: 50, default: () => "''" })
  empId: string;

  @Column("nvarchar", { name: "JobTitle", length: 50, default: () => "''" })
  jobTitle: string;

  @Column("varchar", { name: "SettleType", length: 50, default: () => "''" })
  settleType: string;

  @Column("varchar", {
    name: "AttendanceDate",
    length: 10,
    default: () => "''",
  })
  attendanceDate: string;

  @Column("decimal", {
    name: "Qty",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  qty: number;

  @Column("nvarchar", { name: "Unit", length: 10, default: () => "''" })
  unit: string;

  @Column("decimal", {
    name: "Amount",
    precision: 18,
    scale: 4,
    default: () => "(0)",
  })
  amount: number;

  @Column("decimal", {
    name: "TotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  totalAmount: number;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;
}
