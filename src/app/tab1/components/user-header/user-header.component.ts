import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
  standalone: true,
  imports: [IonIcon]
})
export class UserHeaderComponent  implements OnInit {

  userName: string | null = 'Luisa Maria';
  userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEilLrJxiFdeT8x1ELGLzWbUCzYtXGxBWBe4x1oL3oVcXSdtlXUvyGPulxQwKppCA-0r4TguRyrTkf-3tDOmA3rXGaWjwjFcARtoFJzONOE6F0jm_YhRbjKCe9JC-yVGiohsWIi30q0-zTfQk54iUiZVqapt4Gf68Xl9p8lW_J9Wd8k3pRZpT67EYD2y15Mju6tqHe2zw9TEZH3MLIuT4PdYAg6_uqxy0L7KRziQIViJOGsVOOVeWkX--yAjc11-WGEF3gEy82WQQ';

  constructor() {
        addIcons({ notificationsOutline });

  }

  ngOnInit() {}

   onNotificationClick() {
    // Implementar lógica de notificaciones
    console.log('Notifications clicked');
  }

}
