import { Column, Entity, Index } from "typeorm";

@Index("PK__BatchNo__4B913AC74D1A575D", ["flowKey"], { unique: true })
@Entity("BatchNo", { schema: "dbo" })
export class BatchNo {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("varchar", { name: "SysNo", length: 50, default: () => "''" })
  sysNo: string;

  @Column("varchar", { name: "Code", length: 50, default: () => "''" })
  code: string;

  @Column("varchar", { name: "CreateDept", length: 50, default: () => "''" })
  createDept: string;

  @Column("varchar", { name: "Applicant", length: 50, default: () => "''" })
  applicant: string;

  @Column("varchar", { name: "ProductCode", length: 50, default: () => "''" })
  productCode: string;

  @Column("varchar", { name: "BatchNo", length: 20, default: () => "''" })
  batchNo: string;

  @Column("varchar", {
    name: "ManufactureDate",
    length: 10,
    default: () => "''",
  })
  manufactureDate: string;

  @Column("varchar", { name: "EffectDate", length: 10, default: () => "''" })
  effectDate: string;

  @Column("nvarchar", { name: "Size", length: 50, default: () => "''" })
  size: string;

  @Column("nvarchar", { name: "Color", length: 50, default: () => "''" })
  color: string;

  @Column("nvarchar", { name: "Description", length: 100, default: () => "''" })
  description: string;
}
