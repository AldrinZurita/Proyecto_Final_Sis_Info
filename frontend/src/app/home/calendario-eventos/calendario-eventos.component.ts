import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ReservaService } from '../../services/reserva.service';
import { RouterLink } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-calendario-eventos',
  standalone: true,
  imports: [FullCalendarModule, RouterLink],
  templateUrl: './calendario-eventos.component.html',
  styleUrls: ['./calendario-eventos.component.scss']
})
export class CalendarioEventosComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [] as { title: string; start: string; end?: string }[] // Define el tipo correctamente
  };

  constructor(private reservaService: ReservaService) {}

  async ngOnInit() {
    try {
      const reservas = await this.reservaService.getReserva();
      this.calendarOptions.events = reservas; // Actualiza los eventos del calendario
    } catch (error) {
      console.error('Error al cargar las reservas:', error);
    }
  }
}
