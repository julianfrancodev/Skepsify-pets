import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { createOutline } from 'ionicons/icons';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ProfileHeaderComponent  implements OnInit {
  @Input() userName: string = 'Camilo Pérez';
  @Input() userDescription: string = 'Dueño de 3 mascotas';
  @Input() userPhoto: string = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb7jY0WaIZaH04qBNPqp2SmgMMtN6VWxCe5AtEL2fP-LVHUm_4qpME5cQTIWku7q6CGiXh4j-z6EMxl-SDGNJ0Sf6fpEUDsEoaHp3OuPC4Tc2LcN58S6-XbgCcETeyfKDshphoZ1nbeAEyV0sOjffZY1oa7PmlapGQET0hTiFTQdMiI-4fl3h80bKyROvfTi4N2Xj5woBly-eCVykxvGg0fPe1VD_34EF1K2DLs5rDcn_5o0laopzPjKdQe3RO2fmrugEA6E242UI';

  constructor() {
    // Registrar iconos
    addIcons({ createOutline });
  }

  ngOnInit() {}

  onEditPhoto() {
    // Lógica para editar foto de perfil
    console.log('Edit photo clicked');
  }

}
