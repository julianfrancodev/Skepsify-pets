import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewPetPage } from './add-new-pet.page';

describe('AddNewPetPage', () => {
  let component: AddNewPetPage;
  let fixture: ComponentFixture<AddNewPetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
