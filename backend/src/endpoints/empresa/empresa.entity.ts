import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';

@Entity('empresas')
export class Empresa {
  @PrimaryGeneratedColumn()
  _id: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'ci' })
  usuario: Usuario;

  @Column({ length: 100 })
  empresa: string;

  @Column({ type: 'blob' })
  documento: Buffer;
}