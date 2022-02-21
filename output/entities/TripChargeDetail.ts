import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Seq_no_4CA06362", ["seqNo"], {})
@Index("_WA_Sys_TripDate_4CA06362", ["tripDate"], {})
@Index("PK__TripChar__793933C26DFB1D37", ["flowKey", "seqNo"], { unique: true })
@Entity("TripCharge_detail", { schema: "dbo" })
export class TripChargeDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "TripDate", length: 10 })
  tripDate: string;

  @Column("nvarchar", { name: "Place", length: 50 })
  place: string;

  @Column("decimal", { name: "Charge01", precision: 18, scale: 0 })
  charge01: number;

  @Column("decimal", { name: "Charge02", precision: 18, scale: 0 })
  charge02: number;

  @Column("decimal", { name: "Charge03", precision: 18, scale: 0 })
  charge03: number;

  @Column("decimal", { name: "Charge04", precision: 18, scale: 0 })
  charge04: number;

  @Column("decimal", { name: "Amount", precision: 18, scale: 0 })
  amount: number;

  @Column("nvarchar", { name: "Memo", length: 500, default: () => "''" })
  memo: string;
}
