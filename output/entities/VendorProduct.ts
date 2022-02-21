import { Column, Entity, Index } from "typeorm";

@Index("PK__VendorPr__4B913AC78372063E", ["flowKey"], { unique: true })
@Entity("VendorProduct", { schema: "dbo" })
export class VendorProduct {
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

  @Column("varchar", { name: "PurchaseUnit", length: 10, default: () => "''" })
  purchaseUnit: string;

  @Column("int", { name: "PurchaseRate", default: () => "(0)" })
  purchaseRate: number;

  @Column("decimal", {
    name: "PurchasePrice",
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  purchasePrice: number;

  @Column("decimal", {
    name: "MiniQty",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  miniQty: number;
}
