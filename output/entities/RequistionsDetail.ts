import { Column, Entity, Index } from "typeorm";

@Index("PK__Requisti__793933C2FBEBD004", ["flowKey", "seqNo"], { unique: true })
@Entity("Requistions_detail", { schema: "dbo" })
export class RequistionsDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "Product", length: 50 })
  product: string;

  @Column("nvarchar", { name: "ProductName", length: 100 })
  productName: string;

  @Column("ntext", { name: "Specification" })
  specification: string;

  @Column("float", { name: "Qty", precision: 53 })
  qty: number;

  @Column("nvarchar", { name: "Unit", length: 50 })
  unit: string;

  @Column("float", { name: "Price", precision: 53 })
  price: number;

  @Column("int", { name: "Amount" })
  amount: number;

  @Column("ntext", { name: "Memo" })
  memo: string;
}
