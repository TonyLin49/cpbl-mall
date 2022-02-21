import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_AccYear_2E5BD364", ["accYear"], {})
@Index("_WA_Sys_Applicant_2E5BD364", ["applicant"], {})
@Index("_WA_Sys_Code_2E5BD364", ["code"], {})
@Index("_WA_Sys_CreateDept_2E5BD364", ["createDept"], {})
@Index("_WA_Sys_MachineNo_2E5BD364", ["machineNo"], {})
@Index("_WA_Sys_Month_2E5BD364", ["month"], {})
@Index("_WA_Sys_SysNo_2E5BD364", ["sysNo"], {})
@Index("_WA_Sys_WordTrack_2E5BD364", ["wordTrack"], {})
@Index("PK__InvoiceD__4B913AC7EC06A433", ["flowKey"], { unique: true })
@Entity("InvoiceDailyData", { schema: "dbo" })
export class InvoiceDailyData {
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

  @Column("varchar", { name: "AccYear", length: 10, default: () => "''" })
  accYear: string;

  @Column("varchar", { name: "Month", length: 10, default: () => "''" })
  month: string;

  @Column("varchar", { name: "MachineNo", length: 10, default: () => "''" })
  machineNo: string;

  @Column("varchar", { name: "WordTrack", length: 10, default: () => "''" })
  wordTrack: string;

  @Column("decimal", {
    name: "InvalidNum",
    precision: 10,
    scale: 0,
    default: () => "(0)",
  })
  invalidNum: number;

  @Column("varchar", { name: "EmptyStartNo", length: 10, default: () => "''" })
  emptyStartNo: string;

  @Column("varchar", { name: "EmptyEndNo", length: 10, default: () => "''" })
  emptyEndNo: string;

  @Column("decimal", {
    name: "EmptyNum",
    precision: 10,
    scale: 0,
    default: () => "(0)",
  })
  emptyNum: number;

  @Column("decimal", {
    name: "TotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  totalAmount: number;

  @Column("decimal", {
    name: "SaleAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  saleAmount: number;

  @Column("decimal", {
    name: "TaxAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  taxAmount: number;

  @Column("decimal", {
    name: "FreeSaleAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  freeSaleAmount: number;
}
