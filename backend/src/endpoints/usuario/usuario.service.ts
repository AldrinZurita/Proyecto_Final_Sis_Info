import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOneBy({ ci: id });
  }

  async create(usuario: Partial<Usuario>): Promise<Usuario> {
    // Validar `rol` antes de guardar
    if (!usuario.rol || typeof usuario.rol !== 'number') {
      throw new BadRequestException('El campo rol es obligatorio y debe ser un número válido');
    }

    return this.usuarioRepository.save(usuario);
  }

  async update(id: number, usuario: Partial<Usuario>): Promise<void> {
    const existingUsuario = await this.usuarioRepository.findOneBy({ ci: id });

    if (!existingUsuario) {
      throw new NotFoundException(`No se encontró el usuario con ID ${id}`);
    }

    // Validar `rol` si se proporciona
    if (usuario.rol && typeof usuario.rol !== 'number') {
      throw new BadRequestException('El campo rol debe ser un número válido');
    }

    await this.usuarioRepository.update(id, usuario);
  }

  async updatePartial(id: number, partialData: Partial<Usuario>): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ ci: id });

    if (!usuario) {
      throw new NotFoundException(`No se encontró el usuario con ID ${id}`);
    }

    // Validar `rol` si se proporciona
    if (partialData.rol && typeof partialData.rol !== 'number') {
      throw new BadRequestException('El campo rol debe ser un número válido');
    }

    // Actualizar solo los campos proporcionados
    Object.assign(usuario, partialData);

    return this.usuarioRepository.save(usuario);
  }

  async delete(id: number): Promise<void> {
    const usuario = await this.usuarioRepository.findOneBy({ ci: id });

    if (!usuario) {
      throw new NotFoundException(`No se encontró el usuario con ID ${id}`);
    }

    await this.usuarioRepository.delete(id);
  }
}