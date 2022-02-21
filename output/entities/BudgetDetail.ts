import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Accounts_014935CB", ["accounts"], {})
@Index("_WA_Sys_Amount_014935CB", ["amount"], {})
@Index("_WA_Sys_M01_014935CB", ["m01"], {})
@Index("_WA_Sys_M02_014935CB", ["m02"], {})
@Index("_WA_Sys_M03_014935CB", ["m03"], {})
@Index("_WA_Sys_M04_014935CB", ["m04"], {})
@Index("_WA_Sys_M05_014935CB", ["m05"], {})
@Index("_WA_Sys_M06_014935CB", ["m06"], {})
@Index("_WA_Sys_M07_014935CB", ["m07"], {})
@Index("_WA_Sys_M08_014935CB", ["m08"], {})
@Index("_WA_Sys_M09_014935CB", ["m09"], {})
@Index("_WA_Sys_M10_014935CB", ["m10"], {})
@Index("_WA_Sys_M11_014935CB", ["m11"], {})
@Index("_WA_Sys_M12_014935CB", ["m12"], {})
@Index("_WA_Sys_MemoUrl_014935CB", ["memoUrl"], {})
@Index("_WA_Sys_Product_014935CB", ["product"], {})
@Index("_WA_Sys_Seq_no_014935CB", ["seqNo"], {})
@Index("PK__Budget_d__793933C21F6BC6AC", ["flowKey", "seqNo"], { unique: true })
@Entity("Budget_detail", { schema: "dbo" })
export class BudgetDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "Accounts", length: 50 })
  accounts: string;

  @Column("ntext", { name: "Summary" })
  summary: string;

  @Column("nvarchar", { name: "Product", length: 50 })
  product: string;

  @Column("decimal", { name: "M01", precision: 18, scale: 0 })
  m01: number;

  @Column("decimal", { name: "M02", precision: 18, scale: 0 })
  m02: number;

  @Column("decimal", { name: "M03", precision: 18, scale: 0 })
  m03: number;

  @Column("decimal", { name: "M04", precision: 18, scale: 0 })
  m04: number;

  @Column("decimal", { name: "M05", precision: 18, scale: 0 })
  m05: number;

  @Column("decimal", { name: "M06", precision: 18, scale: 0 })
  m06: number;

  @Column("decimal", { name: "M07", precision: 18, scale: 0 })
  m07: number;

  @Column("decimal", { name: "M08", precision: 18, scale: 0 })
  m08: number;

  @Column("decimal", { name: "M09", precision: 18, scale: 0 })
  m09: number;

  @Column("decimal", { name: "M10", precision: 18, scale: 0 })
  m10: number;

  @Column("decimal", { name: "M11", precision: 18, scale: 0 })
  m11: number;

  @Column("decimal", { name: "M12", precision: 18, scale: 0 })
  m12: number;

  @Column("decimal", { name: "Amount", precision: 18, scale: 0 })
  amount: number;

  @Column("ntext", { name: "Memo" })
  memo: string;

  @Column("nvarchar", { name: "MemoUrl", length: 100 })
  memoUrl: string;
}
