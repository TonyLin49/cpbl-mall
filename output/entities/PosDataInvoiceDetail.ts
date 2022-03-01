import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_InvoiceNo_477C86E9", ["invoiceNo"], {})
@Index("_WA_Sys_ParentId_477C86E9", ["parentId"], {})
@Index("_WA_Sys_Price_477C86E9", ["price"], {})
@Index("_WA_Sys_ProductCode_477C86E9", ["productCode"], {})
@Index("_WA_Sys_ProductName_477C86E9", ["productName"], {})
@Index("_WA_Sys_Qty_477C86E9", ["qty"], {})
@Index("_WA_Sys_Unit_477C86E9", ["unit"], {})
@Index("PK__PosDataI__4B913AC7317B9B07", ["flowKey"], { unique: true })
@Entity("PosDataInvoiceDetail", { schema: "dbo" })
export class PosDataInvoiceDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("varchar", { name: "ParentId", length: 50, default: () => "''" })
  parentId: string;

  @Column("varchar", { name: "InvoiceNo", length: 20, default: () => "''" })
  invoiceNo: string;

  @Column("varchar", { name: "InvoiceDate", length: 20, default: () => "''" })
  invoiceDate: string;

  @Column("decimal", {
    name: "Seq_no",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  seqNo: number;

  @Column("varchar", { name: "ProductCode", length: 50, default: () => "''" })
  productCode: string;

  @Column("nvarchar", { name: "ProductName", length: 100, default: () => "''" })
  productName: string;

  @Column("decimal", {
    name: "Qty",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  qty: number;

  @Column("nvarchar", { name: "Unit", length: 50, default: () => "''" })
  unit: string;

  @Column("decimal", {
    name: "Price",
    precision: 18,
    scale: 6,
    default: () => "(0)",
  })
  price: number;

  @Column("decimal", {
    name: "Amount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  amount: number;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;
}
