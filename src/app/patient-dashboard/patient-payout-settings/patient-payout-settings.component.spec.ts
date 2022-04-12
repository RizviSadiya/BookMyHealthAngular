import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPayoutSettingsComponent } from './patient-payout-settings.component';

describe('PatientPayoutSettingsComponent', () => {
  let component: PatientPayoutSettingsComponent;
  let fixture: ComponentFixture<PatientPayoutSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPayoutSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPayoutSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
