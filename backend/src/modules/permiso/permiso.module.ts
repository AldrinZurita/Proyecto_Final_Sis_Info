import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermisoService } from './permiso.service';
import { PermisoController } from './permiso.controller';
import { Permiso } from '../../entities/permiso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Permiso])],
  providers: [PermisoService],
  controllers: [PermisoController],
})
export class PermisoModule {}
