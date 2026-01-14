import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { location, chevronDown, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-address-bar',
  templateUrl: './address-bar.component.html',
  styleUrls: ['./address-bar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AddressBarComponent  implements OnInit {
  address: string = 'Home (Calle 123)';

  constructor() {
    // Registrar los iconos de ionicons
    addIcons({ location, chevronDown, notificationsOutline });
  }

  ngOnInit() {}

  changeAddress() {
    // Lógica para cambiar dirección
    console.log('Change address clicked');
  }

  openNotifications() {
    // Lógica para abrir notificaciones
    console.log('Notifications clicked');
  }

}
