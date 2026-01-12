import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { medicalOutline, locationOutline, bandageOutline } from 'ionicons/icons';

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  status: string;
  statusType: 'pending' | 'completed';
  icon: string;
  iconType: 'vaccine' | 'pill' | 'medical';
  location?: string;
  description?: string;
}

@Component({
  selector: 'app-timeline-history',
  templateUrl: './timeline-history.component.html',
  styleUrls: ['./timeline-history.component.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon]
})
export class TimelineHistoryComponent implements OnInit {
  upcomingEvents: TimelineEvent[] = [
    {
      id: 1,
      title: 'Vacuna Antirrábica',
      date: '12 Oct 2023 • 10:00 AM',
      status: 'Pendiente',
      statusType: 'pending',
      icon: 'bandage-outline',
      iconType: 'vaccine',
      location: 'Clínica Veterinaria Central'
    }
  ];

  pastEvents: TimelineEvent[] = [
    {
      id: 2,
      title: 'Tratamiento Antiparasitario',
      date: '20 Sep 2023',
      status: 'Completado',
      statusType: 'completed',
      icon: 'bandage-outline',
      iconType: 'pill',
      description: 'Dr. Martínez - Dosis mensual'
    },
    {
      id: 3,
      title: 'Consulta General',
      date: '15 Ago 2023',
      status: 'Completado',
      statusType: 'completed',
      icon: 'medical-outline',
      iconType: 'medical',
      description: 'Revisión anual de peso y dieta.'
    },
    {
      id: 4,
      title: 'Vacuna Triple Felina',
      date: '10 Jul 2023',
      status: 'Completado',
      statusType: 'completed',
      icon: 'bandage-outline',
      iconType: 'medical'
    }
  ];

  constructor() {
    addIcons({ medicalOutline, locationOutline, bandageOutline });
  }

  ngOnInit() {}
}

