import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('estados')
export class Estado{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, unique: true})
    estado: string;
}

// Datos estaticos