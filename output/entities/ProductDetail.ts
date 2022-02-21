import { Column, Entity, Index } from "typeorm";

@Index("PK__Product___793933C28DA578BB", ["flowKey", "seqNo"], { unique: true })
@Entity("Product_detail", { schema: "dbo" })
export class ProductDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("varchar", { name: "Accounts", length: 50, default: () => "''" })
  accounts: string;

  @Column("int", { name: "Amount", default: () => "(0)" })
  amount: number;
}
