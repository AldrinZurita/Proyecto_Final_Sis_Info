import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransferenciaReserva } from '../../entities/transferencia_reserva.entity';

@Injectable()
export class TransferenciaReservaService {
  constructor(
    @InjectRepository(TransferenciaReserva)
    private readonly transferenciaReservaRepository: Repository<TransferenciaReserva>,
  ) {}

  // Obtener todas las transferencias de reserva
  findAll(): Promise<TransferenciaReserva[]> {
    return this.transferenciaReservaRepository.find({
      relations: ['reserva', 'usuarioOrigen', 'usuarioDestino'], // Incluye relaciones con Reserva y Usuario
    });
  }

  // Obtener una transferencia de reserva por ID
  findOne(id: number): Promise<TransferenciaReserva> {
    return this.transferenciaReservaRepository.findOne({
      where: { id },
      relations: ['reserva', 'usuarioOrigen', 'usuarioDestino'],
    });
  }

  // Crear una nueva transferencia de reserva
  create(data: Partial<TransferenciaReserva>): Promise<TransferenciaReserva> {
    const nuevaTransferencia = this.transferenciaReservaRepository.create(data);
    return this.transferenciaReservaRepository.save(nuevaTransferencia);
  }

  // Actualizar el estado de una transferencia de reserva
  async update(id: number, data: Partial<TransferenciaReserva>): Promise<void> {
    await this.transferenciaReservaRepository.update(id, data);
  }

  // Eliminar una transferencia de reserva
  async delete(id: number): Promise<void> {
    await this.transferenciaReservaRepository.delete(id);
  }
}
