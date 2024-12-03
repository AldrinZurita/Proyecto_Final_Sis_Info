import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransferenciaReserva } from '../../entities/transferencia_reserva.entity';
import { TransferenciaReservaService } from './transferencia-reserva.service';
import { TransferenciaReservaController } from './transferencia-reserva.controller';
import { Reserva } from '../../entities/reserva.entity';
import { Usuario } from '../../entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransferenciaReserva, Reserva, Usuario]),
  ],
  providers: [TransferenciaReservaService],
  controllers: [TransferenciaReservaController],
})
export class TransferenciaReservaModule {}
