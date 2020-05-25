import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calc:any = "test";
  clr(){

    this.calc="";

  }

  val: any;
  display(val){
    console.log(val);
    this.calc += val;
  }

  res:any;
  solve(){

    this.res = eval(this.calc);
    this.calc = this.res;

  }


  // x:any;
  // y: any;
  // add(){
     
  //  this.x += this.calc;
  //   this.x = this.calc;
  //   this.clr();
  // }

  // solve2(){

  // }

  
}
