import { Column, Entity, Index } from "typeorm";

@Index("PK__ReserveF__793933C20A0BD12C", ["flowKey", "seqNo"], { unique: true })
@Entity("ReserveFundsApply_detail", { schema: "dbo" })
export class ReserveFundsApplyDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("ntext", { name: "Summary" })
  summary: string;

  @Column("nvarchar", { name: "Accounts", length: 50 })
  accounts: string;

  @Column("nvarchar", { name: "Project", length: 50 })
  project: string;

  @Column("nvarchar", { name: "AccType", length: 50 })
  accType: string;

  @Column("nvarchar", { name: "Product", length: 50 })
  product: string;

  @Column("int", { name: "M01" })
  m01: number;

  @Column("int", { name: "M02" })
  m02: number;

  @Column("int", { name: "M03" })
  m03: number;

  @Column("int", { name: "M04" })
  m04: number;

  @Column("int", { name: "M05" })
  m05: number;

  @Column("int", { name: "M06" })
  m06: number;

  @Column("int", { name: "M07" })
  m07: number;

  @Column("int", { name: "M08" })
  m08: number;

  @Column("int", { name: "M09" })
  m09: number;

  @Column("int", { name: "M10" })
  m10: number;

  @Column("int", { name: "M11" })
  m11: number;

  @Column("int", { name: "M12" })
  m12: number;

  @Column("int", { name: "Amount" })
  amount: number;
}
