import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, medicalOutline, timeOutline } from 'ionicons/icons';

interface Appointment {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  icon: string;
  iconType: 'calendar' | 'medical' | 'vaccine';
}

@Component({
  selector: 'app-next-appointmets',
  templateUrl: './next-appointmets.component.html',
  styleUrls: ['./next-appointmets.component.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon]
})
export class NextAppointmetsComponent implements OnInit {
  appointments: Appointment[] = [
    {
      id: 1,
      title: 'Vacunación de Luna',
      date: '14 Oct',
      time: '09:30 AM',
      location: 'Vet. Central',
      icon: 'calendar-outline',
      iconType: 'calendar'
    },
    {
      id: 2,
      title: 'Chequeo General Rex',
      date: '22 Nov',
      time: '04:15 PM',
      location: 'Dr. Martinez',
      icon: 'medical-outline',
      iconType: 'medical'
    }
  ];

  constructor() {
    addIcons({ calendarOutline, medicalOutline, timeOutline });
  }

  ngOnInit() {}

  onAppointmentClick(appointment: Appointment) {
    console.log('Cita seleccionada:', appointment);
    // Implementar navegación o mostrar detalles de la cita
  }
}
