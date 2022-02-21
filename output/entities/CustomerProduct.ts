import { Column, Entity, Index } from "typeorm";

@Index("PK__Customer__4B913AC7E02AE0A8", ["flowKey"], { unique: true })
@Entity("CustomerProduct", { schema: "dbo" })
export class CustomerProduct {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("varchar", { name: "ParentId", length: 50, default: () => "''" })
  parentId: string;

  @Column("varchar", { name: "ProductCode", length: 50, default: () => "''" })
  productCode: string;

  @Column("nvarchar", { name: "ProductName", length: 50, default: () => "''" })
  productName: string;

  @Column("varchar", { name: "SaleUnit", length: 10, default: () => "''" })
  saleUnit: string;

  @Column("decimal", {
    name: "SalePrice",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  salePrice: number;

  @Column("decimal", {
    name: "MiniQty",
    precision: 10,
    scale: 0,
    default: () => "(0)",
  })
  miniQty: number;
}
