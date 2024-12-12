import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Reserva } from '../reserva/reserva.entity';
import { TipoEvento } from '../tipo-evento/tipo-evento.entity'

@Entity('eventos')
export class Evento {
  @PrimaryGeneratedColumn()
  _id: number;

  @ManyToOne(() => Reserva)
  @JoinColumn({ name: '_id' })
  reserva: Reserva;

  @ManyToOne(() => TipoEvento)
  @JoinColumn({ name: '_id' })
  tipo_evento: TipoEvento;

  @Column({ length: 255 })
  nombre: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'date' })
  fecha_evento: Date;
}