import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

interface Specialist {
  id: number;
  name: string;
  imageUrl: string;
  featured: boolean;
}

@Component({
  selector: 'app-vet-main-specialists',
  templateUrl: './vet-main-specialists.component.html',
  styleUrls: ['./vet-main-specialists.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class VetMainSpecialistsComponent  implements OnInit {
  specialists: Specialist[] = [
    {
      id: 1,
      name: 'Dr. Maria L.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqueJxVfmdPjviStP35zWYcTOUaiN_nMN-51ZpHOdwyfZCcMos6PrRLc3mmkRJJcw-CGE_8PrmRPVpb3_BoCmCebzUAw5JjiK8pG9p6fRxHIgeKSrA3UN7L5tfAuWqyy7HMnrbwanTaTqcX-rN05WYM_Pnp7jdQydwCEUaXyHVXyMPW3uexfqklMphDo3oymAIo99VTbKjy6kbSpA0Rwqwd5H5yuU7G7xhyhBBNg0vCB8VCjwm35VoFpEFRpZmlItCa6qKq1fzb5s',
      featured: true
    },
    {
      id: 2,
      name: 'Dr. James W.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOoOruoL2k3l_Pd8EnlMOUq40DYuswAU2z0lr3U3CEjTc1gyQtk-FfYFYYQKEmccpzdauBmk7z9ThtaOESOP4VNFVzbffBXjqHeEnpsJal1vouxP1v01EuXpewhiF32Jj_v39rWIPcC5CHUAOixeA9DleR1NMu-1HS2AzPDVBUBtL1Q8ds-iqJtK6jck2Vf2o8WjlJcW7QbDCNEvXPl9pmFT-IgR8eQdFwlxwubrtzcy9DwJpnDfZ90koAdj-xxjuSnbnMKHEefW0',
      featured: false
    },
    {
      id: 3,
      name: 'Dr. Sofia K.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkDBxFKUMv-eaUQoDp7rNhTq0KJv2nStqyeMPKwMFBWQXUINFxeUwCyOv0RNjD0ho6JZni89QfPG8egJQPsRpE6e_5OFcMI6MCGTQ4PuHDumrDC7_buEKw4cNEG1UTwgrF1hADTKtvj6eq2ZT5ABzaK8y5D_BeSFCxf1-yHb3xpViTq3x57T0Eld5hnAuXbKMlmhNp9mYglOjGzf3gbPFGHgjc4MIPnnyvOti0ahPGwcmRwwqo5ELVPl_A7llei92GDzO0izmA7X0',
      featured: false
    }
  ];

  constructor() { }

  ngOnInit() {}

  onSpecialistClick(specialist: Specialist) {
    console.log('Specialist clicked:', specialist);
    // Lógica para navegar al perfil del especialista
  }

}
