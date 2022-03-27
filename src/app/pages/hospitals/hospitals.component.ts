import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { SharedataService } from '../../services/sharedata.service'
import { HtmlParser, XmlParser } from '@angular/compiler';

import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
  constructor(private api:ApiService,private router: Router,private share:SharedataService) { }

  ngOnInit(): void {
this.get_hospital_data()
  }
hospital_list:any=[]
htmlDoc:any
get_hospital_data(){
this.hospital_list=[]
this.api.hospital_list.subscribe((res:any)=>
{
console.log("ravi",res);
this.hospital_list=res.data

console.log("this.hospital_list",this.hospital_list);


})

}

route_hospital_detail(hos){
console.log("doc",hos);
this.share.set_hos_wise_detail(hos)
this.router.navigate(['/hospital-detail']);

}
}
