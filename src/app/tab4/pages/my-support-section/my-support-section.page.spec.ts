import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MySupportSectionPage } from './my-support-section.page';

describe('MySupportSectionPage', () => {
  let component: MySupportSectionPage;
  let fixture: ComponentFixture<MySupportSectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MySupportSectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
