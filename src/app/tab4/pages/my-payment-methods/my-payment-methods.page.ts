import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-payment-methods',
  templateUrl: './my-payment-methods.page.html',
  styleUrls: ['./my-payment-methods.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MyPaymentMethodsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
