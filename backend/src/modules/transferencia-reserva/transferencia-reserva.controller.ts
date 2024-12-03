import { Controller, Get, Post, Put, Delete, Body, Param, Req, BadRequestException, NotFoundException, ForbiddenException, InternalServerErrorException } from '@nestjs/common';
import { TransferenciaReservaService } from './transferencia-reserva.service';
import { TransferenciaReserva } from '../../entities/transferencia_reserva.entity';
import { Request } from 'express';

@Controller('transferencias-reservas')
export class TransferenciaReservaController {
  constructor(private readonly transferenciaReservaService: TransferenciaReservaService) {}

  // Obtener todas las transferencias de reservas
  @Get()
  async findAll(@Req() req: Request): Promise<TransferenciaReserva[]> {
    try {
      const user = req['user'];

      // Validar rol (super-admin o admin)
      if (user.rol !== 'super-admin' && user.rol !== 'admin') {
        throw new ForbiddenException('No tienes permiso para listar las transferencias de reservas');
      }

      const transferencias = await this.transferenciaReservaService.findAll();
      if (transferencias.length === 0) {
        throw new NotFoundException('No se encontraron transferencias de reservas');
      }
      return transferencias;
    } catch (error) {
      console.error('Error al obtener las transferencias de reservas:', error);
      throw new InternalServerErrorException('Ocurrió un error al obtener las transferencias de reservas');
    }
  }

  // Obtener una transferencia de reserva por ID
  @Get(':id')
  async findOne(@Param('id') id: number, @Req() req: Request): Promise<TransferenciaReserva> {
    try {
      const user = req['user'];

      // Validar rol
      if (user.rol !== 'super-admin' && user.rol !== 'admin') {
        throw new ForbiddenException('No tienes permiso para consultar esta transferencia de reserva');
      }

      const transferencia = await this.transferenciaReservaService.findOne(id);
      if (!transferencia) {
        throw new NotFoundException(`No se encontró la transferencia de reserva con ID ${id}`);
      }
      return transferencia;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(`Error al buscar la transferencia de reserva con ID ${id}:`, error);
      throw new InternalServerErrorException(`Error al buscar la transferencia de reserva con ID ${id}`);
    }
  }

  // Crear una nueva transferencia de reserva
  @Post()
  async create(
    @Body('id_reserva') id_reserva: number,
    @Body('ci_usuario_origen') ci_usuario_origen: number,
    @Body('ci_usuario_destino') ci_usuario_destino: number,
    @Body('fecha_solicitud') fecha_solicitud: string,
    @Req() req: Request,
  ): Promise<TransferenciaReserva> {
    try {
      const user = req['user'];

      // Validar rol
      if (user.rol !== 'super-admin' && user.rol !== 'admin') {
        throw new ForbiddenException('No tienes permiso para crear una transferencia de reserva');
      }

      if (!id_reserva || !ci_usuario_origen || !ci_usuario_destino || !fecha_solicitud) {
        throw new BadRequestException('Los campos id_reserva, ci_usuario_origen, ci_usuario_destino y fecha_solicitud son obligatorios');
      }

      const nuevaTransferencia = {
        id_reserva,
        ci_usuario_origen,
        ci_usuario_destino,
        fecha_solicitud,
        estado: 'pendiente', // El estado predeterminado es 'pendiente'
      };
      return await this.transferenciaReservaService.create(nuevaTransferencia);
    } catch (error) {
      console.error('Error al crear la transferencia de reserva:', error);
      throw new InternalServerErrorException('Ocurrió un error al registrar la transferencia de reserva');
    }
  }

  // Actualizar una transferencia de reserva
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<TransferenciaReserva>,
    @Req() req: Request,
  ): Promise<void> {
    try {
      const user = req['user'];

      // Validar rol
      if (user.rol !== 'super-admin' && user.rol !== 'admin') {
        throw new ForbiddenException('No tienes permiso para actualizar esta transferencia de reserva');
      }

      const transferencia = await this.transferenciaReservaService.findOne(id);
      if (!transferencia) {
        throw new NotFoundException(`No se encontró la transferencia de reserva con ID ${id}`);
      }

      await this.transferenciaReservaService.update(id, data);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(`Error al actualizar la transferencia de reserva con ID ${id}:`, error);
      throw new InternalServerErrorException(`Error al actualizar la transferencia de reserva con ID ${id}`);
    }
  }

  // Eliminar una transferencia de reserva
  @Delete(':id')
  async delete(@Param('id') id: number, @Req() req: Request): Promise<void> {
    try {
      const user = req['user'];

      // Validar rol
      if (user.rol !== 'super-admin' && user.rol !== 'admin') {
        throw new ForbiddenException('No tienes permiso para eliminar esta transferencia de reserva');
      }

      const transferencia = await this.transferenciaReservaService.findOne(id);
      if (!transferencia) {
        throw new NotFoundException(`No se encontró la transferencia de reserva con ID ${id}`);
      }

      await this.transferenciaReservaService.delete(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(`Error al eliminar la transferencia de reserva con ID ${id}:`, error);
      throw new InternalServerErrorException(`Error al eliminar la transferencia de reserva con ID ${id}`);
    }
  }
}
