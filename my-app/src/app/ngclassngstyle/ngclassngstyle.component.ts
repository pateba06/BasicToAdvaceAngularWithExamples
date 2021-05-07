import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclassngstyle',
  templateUrl: './ngclassngstyle.component.html',
  styleUrls: ['./ngclassngstyle.component.css']
})
export class NgclassngstyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
