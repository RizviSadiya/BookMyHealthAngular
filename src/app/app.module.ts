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
import { DoctorDashboardModule } from './doctor-dashboard/doctor-dashboard.module';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    DoctorDashboardModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
