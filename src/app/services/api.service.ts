import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { HttpClient,HttpHeaders,HttpClientModule } from "@angular/common/http";
import { map} from "rxjs/operators";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  rootUrl;
 doctor_array:any=[]
 hospital_array:any=[]
 treatment_detail_obj:any={}
  doctor_list = new BehaviorSubject(this.doctor_array);
  hospital_list = new BehaviorSubject(this.hospital_array);
  treatment_detail = new BehaviorSubject(this.treatment_detail_obj);
  constructor(private http: HttpClient) {
  this.rootUrl = 'https://7eyeitsolutions.com/medical/medical_api/index.php/Front_end_api/';
}

changeapi(x){
  this.rootUrl = x;
}
set_doctor_list(data){
let obj={
"cat_id":data.cat_id,
"cat_name":data.cat_name,

}
this.postapi("doctor_list_category_wise_basic_detail",obj).subscribe((res:any)=>{
if(res.status==1){
    this.doctor_list.next(res);
}
})
}
set_hospital_list(data){
let obj={
"cat_id":data.cat_id,
"cat_name":data.cat_name,

}
this.postapi("hospital_list_category_wise_basic_detail",obj).subscribe((res:any)=>{
if(res.status==1){
    this.hospital_list.next(res);
}
})
}
set_treatement_detail(t_id){
let obj={
"t_id":t_id,

}
this.postapi("get_treatment_detail",obj).subscribe((res:any)=>{
if(res.status==1){
    this.treatment_detail.next(res);
}
})
}
postapi(x, object): any {
    return  this.http.post(this.rootUrl + x, object).pipe(map(res => res));
  }


  getapi(x): Observable<any>{
    return this.http.get<any>(this.rootUrl + x).pipe(map(res => res));
  }
}