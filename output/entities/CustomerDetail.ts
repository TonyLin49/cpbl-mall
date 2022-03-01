import { Column, Entity, Index } from "typeorm";

@Index("PK__Customer__793933C2B48A57F5", ["flowKey", "seqNo"], { unique: true })
@Entity("Customer_detail", { schema: "dbo" })
export class CustomerDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "Address", length: 100 })
  address: string;
}
