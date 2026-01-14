import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyDetailAddressPage } from './my-detail-address.page';

describe('MyDetailAddressPage', () => {
  let component: MyDetailAddressPage;
  let fixture: ComponentFixture<MyDetailAddressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
