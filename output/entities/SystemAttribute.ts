import { Column, Entity, Index } from "typeorm";

@Index("PK__SystemAt__37DFF7C824E988A1", ["fieldKey"], { unique: true })
@Entity("SystemAttribute", { schema: "dbo" })
export class SystemAttribute {
  @Column("nvarchar", { primary: true, name: "FieldKey", length: 50 })
  fieldKey: string;

  @Column("ntext", { name: "FieldValue" })
  fieldValue: string;
}
