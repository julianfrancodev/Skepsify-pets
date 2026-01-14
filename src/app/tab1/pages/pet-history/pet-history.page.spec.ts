import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetHistoryPage } from './pet-history.page';

describe('PetHistoryPage', () => {
  let component: PetHistoryPage;
  let fixture: ComponentFixture<PetHistoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
