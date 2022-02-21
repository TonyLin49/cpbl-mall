import { Column, Entity, Index } from "typeorm";

@Index("PK__SaleBudg__793933C26CA37E7A", ["flowKey", "seqNo"], { unique: true })
@Entity("SaleBudget_detail", { schema: "dbo" })
export class SaleBudgetDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "Accounts", length: 50 })
  accounts: string;

  @Column("ntext", { name: "Summary" })
  summary: string;

  @Column("nvarchar", { name: "Product", length: 50 })
  product: string;

  @Column("int", { name: "Price" })
  price: number;

  @Column("int", { name: "Q01" })
  q01: number;

  @Column("int", { name: "Q02" })
  q02: number;

  @Column("int", { name: "Q03" })
  q03: number;

  @Column("int", { name: "Q04" })
  q04: number;

  @Column("int", { name: "Q05" })
  q05: number;

  @Column("int", { name: "Q06" })
  q06: number;

  @Column("int", { name: "Q07" })
  q07: number;

  @Column("int", { name: "Q08" })
  q08: number;

  @Column("int", { name: "Q09" })
  q09: number;

  @Column("int", { name: "Q10" })
  q10: number;

  @Column("int", { name: "Q11" })
  q11: number;

  @Column("int", { name: "Q12" })
  q12: number;

  @Column("int", { name: "Qty" })
  qty: number;

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

  @Column("ntext", { name: "Memo" })
  memo: string;

  @Column("nvarchar", { name: "MemoUrl", length: 100 })
  memoUrl: string;
}
