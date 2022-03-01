import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_FieldName_2B3F6F97", ["fieldName"], {})
@Index("_WA_Sys_LocalFieldName_2B3F6F97", ["localFieldName"], {})
@Index("_WA_Sys_ParentId_2B3F6F97", ["parentId"], {})
@Index("PK__PrgConfi__4B913AC7390435A4", ["flowKey"], { unique: true })
@Entity("PrgConfigMasterBeanFields", { schema: "dbo" })
export class PrgConfigMasterBeanFields {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "ParentId", length: 50 })
  parentId: string;

  @Column("int", { name: "FieldOrder" })
  fieldOrder: number;

  @Column("nvarchar", { name: "FieldName", length: 50 })
  fieldName: string;

  @Column("nvarchar", { name: "LocalFieldName", length: 50 })
  localFieldName: string;

  @Column("nvarchar", { name: "DataType", length: 50 })
  dataType: string;

  @Column("nvarchar", { name: "HtmlType", length: 50 })
  htmlType: string;

  @Column("nchar", { name: "IsCheckEmpty", length: 1 })
  isCheckEmpty: string;

  @Column("nchar", { name: "IsSearchField", length: 1 })
  isSearchField: string;

  @Column("nchar", { name: "IsPrintField", length: 1 })
  isPrintField: string;

  @Column("nchar", { name: "IsExportField", length: 1 })
  isExportField: string;

  @Column("nchar", { name: "IsShowField", length: 1 })
  isShowField: string;

  @Column("int", { name: "ListWidth" })
  listWidth: number;
}
