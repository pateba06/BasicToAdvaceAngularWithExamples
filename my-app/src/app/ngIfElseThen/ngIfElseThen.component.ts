import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngIfElseThen',
  templateUrl: './ngIfElseThen.component.html',
  styleUrls: ['./ngIfElseThen.component.css']
})
export class NgIfElseThenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // *ngIf display message on using ngIf
  isValid: boolean = false;
  // created this method which will only show when we click on *ngIf
  onCreateBlock() {
    this.isValid = true;
  }
  // ngSwitch example
  selectedProduct: string = "";
  selectProduct(val) {
    // console to using $event and what val returns.
    console.log(val);
    this.selectedProduct = val.target.value;
  }

  //*ngFor example 
  product = [
    {
      proimg:'https://tse2.mm.bing.net/th?id=OIP.lYVzyTHvj2cME5ekzl8bYAHaFj&pid=Api&P=0&w=217&h=164',
      name:'Laptop', id:'pro001', price:"150000"
    },
    {
      proimg:'https://tse3.mm.bing.net/th?id=OIP.F2OBmKwEv7h2uU29TY776wHaEK&pid=Api&P=0&w=306&h=173',
      name:'Mobile', id:'pro002', price:"160000"
    },
    {
      proimg:'https://tse1.mm.bing.net/th?id=OIP.l5t9FwPxH7KFdHzVwdTUYAHaFL&pid=Api&rs=1&c=1&qlt=95&w=146&h=102',
      name:'Computer', id:'pro004', price:"190000"
    },
    {
      proimg :'https://tse4.mm.bing.net/th?id=OIP.5Ne6c_C0QnDP-APepToqCgHaIp&pid=Api&P=0&w=300&h=300',
      name:'Washing Machine', id:'pro005', price:"140000"
    }

  ]
}
