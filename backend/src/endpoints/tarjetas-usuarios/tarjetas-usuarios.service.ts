import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TarjetasUsuarios } from './tarjetas-usuarios.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TarjetasUsuariosService {
    constructor(
        @InjectRepository(TarjetasUsuarios)
        private tarjetaRepository: Repository<TarjetasUsuarios>,
      ) {}
      async getByNumber(num_tarjeta: string) {
        const response = await this.tarjetaRepository.findOneBy({numero_tarjeta: num_tarjeta});
    }

    async getByUser(ci_usuario: number) {
        const response = await this.tarjetaRepository.findBy({usuario: ci_usuario});
    }
    async create(tarjeta: Partial<TarjetasUsuarios>) {
        const salt = await bcrypt.genSalt();
        tarjeta.cvc = await bcrypt.hash(tarjeta.cvc, salt);
        return this.tarjetaRepository.save(tarjeta);
    }
}