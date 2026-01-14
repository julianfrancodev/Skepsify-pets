import { Component } from '@angular/core';
import {IonContent } from '@ionic/angular/standalone';
import { AddressBarComponent } from "./components/address-bar/address-bar.component";
import { VetAtHomeCardComponent } from "./components/vet-at-home-card/vet-at-home-card.component";
import { VetMainServicesComponent } from "./components/vet-main-services/vet-main-services.component";
import { VetMainSpecialistsComponent } from "./components/vet-main-specialists/vet-main-specialists.component";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonContent, AddressBarComponent, VetAtHomeCardComponent, VetMainServicesComponent, VetMainSpecialistsComponent],
})
export class Tab3Page {
  constructor() {}
}
