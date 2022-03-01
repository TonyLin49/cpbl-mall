import { Column, Entity, Index } from "typeorm";

@Index("PK__PkeyNo__A7C0914E509B2DD4", ["pkey"], { unique: true })
@Entity("PkeyNo", { schema: "dbo" })
export class PkeyNo {
  @Column("nvarchar", { primary: true, name: "Pkey", length: 50 })
  pkey: string;

  @Column("int", { name: "No" })
  no: number;
}
