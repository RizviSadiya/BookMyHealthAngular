import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { SharedataService } from '../../services/sharedata.service'
import { HtmlParser, XmlParser } from '@angular/compiler';

import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-treatment-detail',
  templateUrl: './treatment-detail.component.html',
  styleUrls: ['./treatment-detail.component.scss']
})
export class TreatmentDetailComponent implements OnInit {

  constructor(private api:ApiService,private router: Router,private share:SharedataService) { }
treatment_id
  ngOnInit(): void {

this.get_treatment_detail()

  }
treatment_detail:any={}
get_treatment_detail(){

this.treatment_detail={}
this.api.treatment_detail.subscribe((res:any)=>
{
console.log("ravi",res);
this.treatment_detail=res.data

console.log("this.treatment_detail",this.treatment_detail);


})

}
}
