import { Column, Entity, Index } from "typeorm";

@Index("PK__ReserveF__4B913AC79588E3D3", ["flowKey"], { unique: true })
@Entity("ReserveFundApply", { schema: "dbo" })
export class ReserveFundApply {
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

  @Column("nvarchar", { name: "DeptId", length: 50 })
  deptId: string;

  @Column("nvarchar", { name: "ApplicantName", length: 50 })
  applicantName: string;

  @Column("nvarchar", { name: "AccYear", length: 50 })
  accYear: string;

  @Column("nvarchar", { name: "ReserveType", length: 50 })
  reserveType: string;

  @Column("nvarchar", { name: "ReserveFundsNo", length: 50 })
  reserveFundsNo: string;

  @Column("nvarchar", { name: "ApplyReason", length: 50 })
  applyReason: string;

  @Column("int", { name: "TotalAmount" })
  totalAmount: number;

  @Column("ntext", { name: "Memo" })
  memo: string;
}
