import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRegistrationPageComponent } from './vendor-registration-page.component';

describe('VendorRegistrationPageComponent', () => {
  let component: VendorRegistrationPageComponent;
  let fixture: ComponentFixture<VendorRegistrationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorRegistrationPageComponent]
    });
    fixture = TestBed.createComponent(VendorRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
