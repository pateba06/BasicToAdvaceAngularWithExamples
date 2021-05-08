
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

// on click event the message will show dynamically.
message="Original cart";
onAddCart(){
this.message="I am being added to cart dynamically based on (click) event"
}
resetCart(){
  this.message="Back To Original Cart on double click event"
}
//Understanding $event access to change the value
onInputEventClick(event){
    // inspect to see the behavior of event 
    console.log(event.target.value)
    //can change the value of event
    event.target.value="badal"
  }
// Below function will get the event value from either tv/washing machine
cartMessage="";
  onAddCartEvent(event){
    this.cartMessage =event.target.value + "Added in the cart"
  }

//accessing other elements using template reference variable example 
getInputInfo(inputInfo){
  //check in console --You can right replace inputInfo by any custom named var
  console.log(inputInfo)
  console.log(inputInfo.name)
  console.log(inputInfo.value)
}

//example of two way data binding
uname ="Badal Patel" ;

 //adding class by binding true or false
myProperty: boolean = true;
//adding style property
isActive: boolean = true;
myStyle1 = "red";
myStyle2 = "blue";
//[ngClass] object Example
mtlclasses = {
  class1: true,
  class2: true,
  class3: true
}
////[ngStyle] object Example
mltStyle = {
  'background-color': 'black',
  'border': 'solid 1px red'
}
}
