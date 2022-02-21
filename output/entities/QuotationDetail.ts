import { Column, Entity, Index } from "typeorm";

@Index("PK__Quotatio__793933C244AFA9BA", ["flowKey", "seqNo"], { unique: true })
@Entity("Quotation_detail", { schema: "dbo" })
export class QuotationDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "Product", length: 50 })
  product: string;

  @Column("nvarchar", { name: "ProductName", length: 100 })
  productName: string;

  @Column("nvarchar", { name: "Memo", length: 200 })
  memo: string;

  @Column("decimal", { name: "Qty", precision: 18, scale: 0 })
  qty: number;

  @Column("nvarchar", { name: "Unit", length: 20 })
  unit: string;

  @Column("decimal", { name: "Price", precision: 18, scale: 0 })
  price: number;

  @Column("decimal", { name: "Amount", precision: 18, scale: 0 })
  amount: number;
}
