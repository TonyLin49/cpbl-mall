import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_ParentId_300424B4", ["parentId"], {})
@Index("_WA_Sys_Product_300424B4", ["product"], {})
@Index("PK__ProductB__4B913AC7E0A0D520", ["flowKey"], { unique: true })
@Entity("ProductBom", { schema: "dbo" })
export class ProductBom {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("varchar", { name: "ParentId", length: 50 })
  parentId: string;

  @Column("varchar", { name: "Product", length: 50 })
  product: string;

  @Column("decimal", { name: "Qty", precision: 10, scale: 0 })
  qty: number;

  @Column("decimal", {
    name: "SalePrice",
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  salePrice: number;
}
