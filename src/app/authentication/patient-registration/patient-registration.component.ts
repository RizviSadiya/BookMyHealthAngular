import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss'],
})
export class PatientRegistrationComponent implements OnInit {
  constructor( private fb:FormBuilder,private api:ApiService,private route:Router) {}
  patientForm:FormGroup
  ngOnInit(): void {
    this.patientForm =this.fb.group({
      user_name:['',[Validators.required]],
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      cpassword:['',[Validators.required]],
      // interface-id: ['',2835]
    })
  }

  patientRegistration(){
    console.log("patientForm",this.patientForm.value);
    let obj={
      "user_name": this.patientForm.value.user_name,
 "email": this.patientForm.value.email,
 "first_name":this.patientForm.value.first_name,
 "last_name": this.patientForm.value.last_name,
 "password": this.patientForm.value.password,
 "interface-id": 2835

    }
    this.api.patientRegistration(obj).subscribe(res=>{
      if(res){
        console.log("res",res);
        
      }
    })
  }
}
