import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPetAppointmentPage } from './detail-pet-appointment.page';

describe('DetailPetAppointmentPage', () => {
  let component: DetailPetAppointmentPage;
  let fixture: ComponentFixture<DetailPetAppointmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPetAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
