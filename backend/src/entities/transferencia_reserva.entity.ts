import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Reserva } from './reserva.entity';
import { Usuario } from './usuario.entity';

@Entity('transferencias_reservas')
export class TransferenciaReserva {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Reserva)
  @JoinColumn({ name: 'id_reserva' })
  reserva: Reserva;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'ci_usuario_origen' })
  usuarioOrigen: Usuario;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'ci_usuario_destino' })
  usuarioDestino: Usuario;

  @Column('date')
  fecha_solicitud: string;

  @Column({ length: 50, default: 'pendiente' })
  estado: string;
}
