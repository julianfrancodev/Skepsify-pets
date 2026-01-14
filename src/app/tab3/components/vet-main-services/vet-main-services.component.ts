import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { medkit, water, videocam, cut } from 'ionicons/icons';

interface Service {
  id: number;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-vet-main-services',
  templateUrl: './vet-main-services.component.html',
  styleUrls: ['./vet-main-services.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class VetMainServicesComponent  implements OnInit {
  services: Service[] = [
    {
      id: 1,
      name: 'Vaccination',
      icon: 'medkit'
    },
    {
      id: 2,
      name: 'Deworming',
      icon: 'water'
    },
    {
      id: 3,
      name: 'Telemedicine',
      icon: 'videocam'
    },
    {
      id: 4,
      name: 'Grooming',
      icon: 'cut'
    }
  ];

  constructor() {
    // Registrar los iconos de ionicons
    addIcons({ medkit, water, videocam, cut });
  }

  ngOnInit() {}

  onSeeAll() {
    console.log('See All clicked');
    // Lógica para ver todos los servicios
  }

  onServiceClick(service: Service) {
    console.log('Service clicked:', service);
    // Lógica para navegar al detalle del servicio
  }

}
