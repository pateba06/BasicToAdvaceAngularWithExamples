import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
//interpolation example -- it works only with String not with boolean or other data type
fname:string="Badal Patel"

  
  constructor() { }

  ngOnInit() {
  }

//Interpolation practice method
myMethod(){
  return "Interpolation Method Practice" + this.fname;
}

//turnery Operator for Interpolation
appStatus:boolean =false;//initially false
turneryOnline(){
  this.appStatus=true;
}
status1="Online";
status2="Offline";

}
