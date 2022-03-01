import { Column, Entity, Index } from "typeorm";

@Index("PK__Company___793933C259C8AB5C", ["flowKey", "seqNo"], { unique: true })
@Entity("Company_detail", { schema: "dbo" })
export class CompanyDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "PurchaseNo", length: 10 })
  purchaseNo: string;

  @Column("nvarchar", { name: "Address", length: 100 })
  address: string;
}
