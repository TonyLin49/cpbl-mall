import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_IdNo_7E6CC920", ["idNo"], {})
@Index("_WA_Sys_Insurance_7E6CC920", ["insurance"], {})
@Index("_WA_Sys_IsEmployee_7E6CC920", ["isEmployee"], {})
@Index("_WA_Sys_Names_7E6CC920", ["names"], {})
@Index("_WA_Sys_Seq_no_7E6CC920", ["seqNo"], {})
@Index("PK__Bonuses___793933C2A52C6242", ["flowKey", "seqNo"], { unique: true })
@Entity("Bonuses_detail", { schema: "dbo" })
export class BonusesDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nchar", { name: "IsEmployee", length: 1 })
  isEmployee: string;

  @Column("nvarchar", { name: "IdNo", length: 20 })
  idNo: string;

  @Column("nvarchar", { name: "Names", length: 50 })
  names: string;

  @Column("nvarchar", { name: "Address", length: 100 })
  address: string;

  @Column("decimal", {
    name: "Amount",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  amount: number | null;

  @Column("decimal", { name: "Tax", nullable: true, precision: 18, scale: 0 })
  tax: number | null;

  @Column("decimal", {
    name: "Insurance",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  insurance: number | null;

  @Column("decimal", {
    name: "LaborPersonal",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  laborPersonal: number | null;

  @Column("decimal", {
    name: "NetAmount",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  netAmount: number | null;

  @Column("nvarchar", { name: "Reason", length: 200 })
  reason: string;
}
