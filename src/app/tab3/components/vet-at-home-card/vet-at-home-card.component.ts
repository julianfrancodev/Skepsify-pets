import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vet-at-home-card',
  templateUrl: './vet-at-home-card.component.html',
  styleUrls: ['./vet-at-home-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class VetAtHomeCardComponent  implements OnInit {
  @Input() title: string = 'Vet at Home';
  @Input() description: string = 'Professional care at your doorstep';
  @Input() price: number = 25;
  @Input() imageUrl: string = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsoDJX2RQEVKfYzKcuz9brHdeOKCDpbnhfukTA51HY2p-GVTGwgb26hkKVlvaQRRcOFhDSgwLT89HznwyoJzlxuoMTJ1vl4eL7SxBllQCVddOfxayFyLFWtHtWBz6dspkhgav3Eut3DvtXIKdNFK4N4ZoXEo4Ih_0sdUaKn3bEQOUPxBsb0SR5kmq1sNx-usQ93k1l0FvX32ptUtizpATI1SfVA13_z5QAU5MY7bfTRrrlHO2Zt74n-9fPERuOs67-FJG4GsxEqz8';

  constructor() { }

  ngOnInit() {}

  onBookNow() {
    // Lógica para agendar cita
    console.log('Book Now clicked');
  }

}
