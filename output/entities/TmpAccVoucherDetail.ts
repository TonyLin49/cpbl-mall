import { Column, Entity, Index } from "typeorm";

@Index("PK__TmpAccVo__793933C2422A2D43", ["flowKey", "seqNo"], { unique: true })
@Entity("TmpAccVoucher_detail", { schema: "dbo" })
export class TmpAccVoucherDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "Accounts", length: 10 })
  accounts: string;

  @Column("nvarchar", { name: "Summary", length: 200 })
  summary: string;

  @Column("nvarchar", { name: "DeptId", length: 50 })
  deptId: string;

  @Column("nvarchar", { name: "ProjecCode", length: 50 })
  projecCode: string;

  @Column("nvarchar", { name: "BalanceCode", length: 50 })
  balanceCode: string;

  @Column("float", { name: "Damount", precision: 53 })
  damount: number;

  @Column("float", { name: "Camount", precision: 53 })
  camount: number;
}
