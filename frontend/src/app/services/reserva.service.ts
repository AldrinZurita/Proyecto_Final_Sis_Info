import { AxiosService } from "./axios.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class ReservaService {
    private readonly baseUrl = '/reservas';
    reservas: any[]=[];

    constructor(private axiosService: AxiosService) {}

    async postReserva(body:{ usuario: number, espacio_publico: number, fecha: string, hora_inicio: string, hora_fin: string}) {
        try {
            const reserva = await this.axiosService.getAxiosInstance().post(this.baseUrl, body);
            return reserva.data;
        } catch (error: any) {
            console.log('Error al guardar informacion de la reserva');
            throw error;
        }
    }

    async getReserva() {
        try {
            const response = await this.axiosService.getAxiosInstance().get(this.baseUrl);
            this.reservas = response.data.map((reserva: any) => ({
                title: `Reserva ${reserva.id}`,
                start: reserva.fecha + 'T' + reserva.hora_inicio,
                end: reserva.fecha + 'T' + reserva.hora_fin
            }));
            return this.reservas;
        } catch (error: any) {
            console.log('Error al obtener información de la reserva');
            throw error;
        }
    }

}