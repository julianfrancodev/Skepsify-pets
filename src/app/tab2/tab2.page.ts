import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { PetsListComponent } from "./components/pets-list/pets-list.component";
import { TimelineHistoryComponent } from "./components/timeline-history/timeline-history.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonContent, PetsListComponent, TimelineHistoryComponent]
})
export class Tab2Page {

  constructor() {}

}
