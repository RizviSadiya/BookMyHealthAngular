import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HttpClientModule } from '@angular/common/http';
//import {NgxPaginationModule} from 'ngx-pagination';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AppointmentListComponent } from './doctor-dashboard/appointment-list/appointment-list.component';
import { ClinicSettingComponent } from './doctor-dashboard/clinic-setting/clinic-setting.component';
import { HospitalSettingComponent } from './doctor-dashboard/hospital-setting/hospital-setting.component';
import { InvoiceComponent } from './doctor-dashboard/invoice/invoice.component';
import { PayoutSettingComponent } from './doctor-dashboard/payout-setting/payout-setting.component';
import { ProfileSettingComponent } from './doctor-dashboard/profile-setting/profile-setting.component';
import { ServiceComponent } from './doctor-dashboard/service/service.component';
@NgModule({
  declarations: [
    AppComponent,
    DemopageComponent,
    NewdemoComponent,
    HomeComponent,
    DoctorComponent,
    DoctorDetailComponent,
    HospitalsComponent,
    HospitalDetailComponent,
    TreatmentComponent,
    TreatmentDetailComponent,
    TestimonialsComponent,
    AboutUsComponent,
    ContactUsComponent,
    DoctorDashboardComponent,
    AppointmentListComponent,
    ClinicSettingComponent,
    HospitalSettingComponent,
    InvoiceComponent,
    PayoutSettingComponent,
    ProfileSettingComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
