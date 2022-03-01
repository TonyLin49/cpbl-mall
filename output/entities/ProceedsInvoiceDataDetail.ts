import { Column, Entity, Index } from "typeorm";

@Index("PK__Proceeds__793933C2DF79D828", ["flowKey", "seqNo"], { unique: true })
@Entity("ProceedsInvoiceData_detail", { schema: "dbo" })
export class ProceedsInvoiceDataDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("varchar", { name: "ProductCode", length: 50, default: () => "''" })
  productCode: string;

  @Column("nvarchar", { name: "ProductName", length: 50, default: () => "''" })
  productName: string;

  @Column("varchar", { name: "Unit", length: 10, default: () => "''" })
  unit: string;

  @Column("decimal", {
    name: "Qty",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  qty: number;

  @Column("decimal", {
    name: "Price",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  price: number;

  @Column("decimal", {
    name: "Amount",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  amount: number;
}
