import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-detail-address',
  templateUrl: './my-detail-address.page.html',
  styleUrls: ['./my-detail-address.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MyDetailAddressPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
