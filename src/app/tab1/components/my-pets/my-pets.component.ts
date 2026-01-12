import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, arrowForwardOutline } from 'ionicons/icons';

interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  status: string;
  statusType: 'healthy' | 'vaccine' | 'checkup';
  image: string;
}

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon]
})
export class MyPetsComponent implements OnInit {
  pets: Pet[] = [
    {
      id: 1,
      name: 'Rex',
      breed: 'Golden Retriever',
      age: '3 años',
      status: 'Saludable',
      statusType: 'healthy',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhIkzYUYcD3EhlttloFYF_AdTiAGEf6jyReIpjjf81sK_-YTuNTN5ncWjRlaCEySkcg61I-uwX-KbQ7WZ-81aOqX5deQ_W6pDhdz7mhk6MkeQI2Mdj9j9f-mvxDPUQ8MXpbFZnKgVmPDfbkKrIyXdsedeWefOuaXTvgcBqzNnAKph8_4vlNCtIo5oCq7M_PkLdHA7eN8IqyvvdEBE9pTyFHkWVXXVE-0TTmlFEDtstr-xBXnyWopIoKFce1beU6vJk0tbxrProgLg'
    },
    {
      id: 2,
      name: 'Luna',
      breed: 'Siamés',
      age: '2 años',
      status: 'Vacuna',
      statusType: 'vaccine',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKT6bpuiFb-dr-TqVHqtPl7_HzMhhn-u0FVlkHw2CnyGuo2EL5rqi8TfJ1PXm0EePtaZNn2yFYcygIg87ajkF5qu15B2Hx3P9IEibpuAMA3oF__lHsq-6Qw546-q7KE-h-phXpnQY8f6YvnY5hgFShZV7W8dZQRZ2X3hbPyN3Oj9WiBGN3XLL-r9iaetTSJYMqDQxSTDY3gpMBscezApIce089t5oBWo5_Cf5X6n92Vxll5s7E0N7bjp5d0PnOo5WXrSWVewCS6L4'
    }
  ];

  constructor() {
    addIcons({ add, arrowForwardOutline });
  }

  ngOnInit() {}

  onViewAll() {
    console.log('Ver todas las mascotas');
    // Implementar navegación a lista completa
  }

  onAddPet() {
    console.log('Agregar nueva mascota');
    // Implementar lógica para agregar mascota
  }

  onPetClick(pet: Pet) {
    console.log('Mascota seleccionada:', pet);
    // Implementar navegación o mostrar detalles de la mascota
  }

  onViewHistory(pet: Pet, event: Event) {
    event.stopPropagation();
    console.log('Ver historial de:', pet.name);
    // Implementar navegación al historial de la mascota
  }
}
