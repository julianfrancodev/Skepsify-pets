import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { locationOutline, cardOutline, headsetOutline, chevronForward } from 'ionicons/icons';

interface MenuOption {
  id: string;
  label: string;
  icon: string;
  route?: string;
}

@Component({
  selector: 'app-profile-main-options',
  templateUrl: './profile-main-options.component.html',
  styleUrls: ['./profile-main-options.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ProfileMainOptionsComponent  implements OnInit {
  menuOptions: MenuOption[] = [
    {
      id: 'addresses',
      label: 'Mis Direcciones',
      icon: 'location-outline',
      route: '/addresses'
    },
    {
      id: 'payment',
      label: 'Métodos de Pago',
      icon: 'card-outline',
      route: '/payment-methods'
    },
    {
      id: 'support',
      label: 'Soporte',
      icon: 'headset-outline',
      route: '/support'
    }
  ];

  constructor() {
    // Registrar iconos
    addIcons({
      locationOutline,
      cardOutline,
      headsetOutline,
      chevronForward
    });
  }

  ngOnInit() {}

  onOptionClick(option: MenuOption) {
    console.log('Option clicked:', option);
    // Lógica para navegar a la ruta correspondiente
  }

  onLogout() {
    console.log('Logout clicked');
    // Lógica para cerrar sesión
  }

}
