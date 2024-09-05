import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  UsuarioPK: number;

  @Column('varchar', { nullable: false })
  User: string;

  @Column('int', { nullable: false })
  TipoUsuarioFK: number;

  @Column('varchar', { nullable: false })
  Pass: string;

  @Column('varchar', { nullable: false })
  RandomUser: string;

  @Column('varchar', { nullable: false })
  NombreUser: string;

  @Column('date', { nullable: false })
  FechaNacimiento: number;

  @Column('varchar', { nullable: false })
  Fono: string;

  @Column('varchar', { nullable: false })
  isActive: number;

  @Column('varchar', { nullable: false })
  Rut: string;

  @Column('varchar', { nullable: false })
  PathPhoto: string;

  @Column('date', { nullable: false })
  FechaIngreso: number;

  @Column('date', { nullable: false })
  UsuarioFK: number;

}
