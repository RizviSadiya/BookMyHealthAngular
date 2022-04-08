import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { ClinicSettingComponent } from './clinic-setting/clinic-setting.component';
import { HospitalSettingComponent } from './hospital-setting/hospital-setting.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PayoutSettingComponent } from './payout-setting/payout-setting.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [DoctorHomeComponent, AppointmentListComponent, ClinicSettingComponent, HospitalSettingComponent, InvoiceComponent, PayoutSettingComponent, ProfileSettingComponent, ServicesComponent],
  imports: [
    CommonModule
  ]
})
export class DoctorDashboardModule { }
