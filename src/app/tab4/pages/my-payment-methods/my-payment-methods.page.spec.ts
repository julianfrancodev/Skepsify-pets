import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPaymentMethodsPage } from './my-payment-methods.page';

describe('MyPaymentMethodsPage', () => {
  let component: MyPaymentMethodsPage;
  let fixture: ComponentFixture<MyPaymentMethodsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPaymentMethodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
