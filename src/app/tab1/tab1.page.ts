import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { UserHeaderComponent } from "./components/user-header/user-header.component";
import { MyPetsComponent } from "./components/my-pets/my-pets.component";
import { NextAppointmetsComponent } from "./components/next-appointmets/next-appointmets.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonContent, UserHeaderComponent, MyPetsComponent, NextAppointmetsComponent],
})
export class Tab1Page {
  constructor() {}
}
