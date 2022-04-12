import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { DemopageComponent } from './pages/demopage/demopage.component';
import { NewdemoComponent } from './pages/newdemo/newdemo.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorDetailComponent } from './pages/doctor-detail/doctor-detail.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { HospitalDetailComponent } from './pages/hospital-detail/hospital-detail.component';
import { TreatmentComponent } from './pages/treatment/treatment.component';
import { TreatmentDetailComponent } from './pages/treatment-detail/treatment-detail.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PatientRegistrationComponent } from './authentication/patient-registration/patient-registration.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AppointmentListComponent } from './doctor-dashboard/appointment-list/appointment-list.component';
import { ClinicSettingComponent } from './doctor-dashboard/clinic-setting/clinic-setting.component';
import { HospitalSettingComponent } from './doctor-dashboard/hospital-setting/hospital-setting.component';
import { InvoiceComponent } from './doctor-dashboard/invoice/invoice.component';
import { PayoutSettingComponent } from './doctor-dashboard/payout-setting/payout-setting.component';
import { ProfileSettingComponent } from './doctor-dashboard/profile-setting/profile-setting.component';
import { ServiceComponent } from './doctor-dashboard/service/service.component';
import { DoctorDashboardHomeComponent } from './doctor-dashboard/doctor-dashboard-home/doctor-dashboard-home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'demopage', component: DemopageComponent },
  { path: 'newdemo', component: NewdemoComponent },
  { path: '', component: HomeComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'doctor-detail', component: DoctorDetailComponent },
  { path: 'hospitals', component: HospitalsComponent },
  { path: 'hospital-detail', component: HospitalDetailComponent },
  { path: 'treatment', component: TreatmentComponent },
  { path: 'treatment-detail', component: TreatmentDetailComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'patient-registration', component: PatientRegistrationComponent },
  {
    path: 'doctor-dashboard',
    component: DoctorDashboardComponent,
    children: [
      {
        redirectTo: 'doctor-dashboard-home',
        path: '',
        pathMatch: 'full',
      },
      {
        path: 'doctor-dashboard-home',
        component: DoctorDashboardHomeComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
      { path: 'appointment-list', component: AppointmentListComponent },
      { path: 'clinic-setting', component: ClinicSettingComponent },
      { path: 'hospital-setting', component: HospitalSettingComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'payout-setting', component: PayoutSettingComponent },
      { path: 'profile-setting', component: ProfileSettingComponent },
      { path: 'service', component: ServiceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
