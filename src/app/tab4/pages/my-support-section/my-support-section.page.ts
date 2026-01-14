import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-support-section',
  templateUrl: './my-support-section.page.html',
  styleUrls: ['./my-support-section.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MySupportSectionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
