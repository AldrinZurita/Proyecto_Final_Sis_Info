import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';

@Entity('presidentes-otb')
export class PresidenteOtb {
  @PrimaryGeneratedColumn()
  _id: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'ci' })
  usuario: Usuario;

  @Column({ length: 100 })
  otb: string;

  @Column({ type: 'blob' })
  documento: Buffer;
}
