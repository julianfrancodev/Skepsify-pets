import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VetMainSpecialistsComponent } from './vet-main-specialists.component';

describe('VetMainSpecialistsComponent', () => {
  let component: VetMainSpecialistsComponent;
  let fixture: ComponentFixture<VetMainSpecialistsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VetMainSpecialistsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VetMainSpecialistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
