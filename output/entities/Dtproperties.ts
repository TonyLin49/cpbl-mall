import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK__dtproper__92EB783E36F2BB12", ["id", "property"], { unique: true })
@Entity("dtproperties", { schema: "dbo" })
export class Dtproperties {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "objectid", nullable: true })
  objectid: number | null;

  @Column("varchar", { primary: true, name: "property", length: 64 })
  property: string;

  @Column("varchar", { name: "value", nullable: true, length: 255 })
  value: string | null;

  @Column("nvarchar", { name: "uvalue", nullable: true, length: 255 })
  uvalue: string | null;

  @Column("image", { name: "lvalue", nullable: true })
  lvalue: Buffer | null;

  @Column("int", { name: "version", default: () => "(0)" })
  version: number;
}
