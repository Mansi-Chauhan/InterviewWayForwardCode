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
    // eval(this.calc);
    this.calc += val;
  }

  equalbool:boolean = false;
  res:any;
  solve(){

    
   this.res = eval(this.calc);
    this.res = this.calc; 
  }


  // x:any;
  // y: any;
  // add(){
     
  //  this.x += this.calc;
  //   this.x = this.calc;
  //   this.clr();
  // }

  final: any;
  solve2(){

    this.final = this.calculate(this.parseCalculationString(this.calc));
    this.calc=this.final;
  }

  
   parseCalculationString(s) {
   s: String;
    // --- Parse a calculation string into an array of numbers and operators
  
    var calculation = [],
        current = '';
    for (var i = 0, ch; ch = s.charAt(i); i++) {
        if ('^*/+-'.indexOf(ch) > -1) {
            if (current == '' && ch == '-') {
                current = '-';
            } else {
                calculation.push(parseFloat(current), ch);
                current = '';
            }
        } else {
            current += s.charAt(i);
        }
    }
    if (current != '') {
        calculation.push(parseFloat(current));
    }
   
    return calculation;
}

 calculate(calcnew) {
    // --- Perform a calculation expressed as an array of operators and numbers
    var ops = [
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}],
        newCalc = [],
        currentOp;
    for (var i = 0; i < ops.length; i++) {
        for (var j = 0; j < calcnew.length; j++) {
            if (ops[i][calcnew[j]]) {
                currentOp = ops[i][calcnew[j]];
            } else if (currentOp) {
                newCalc[newCalc.length - 1] = 
                    currentOp(newCalc[newCalc.length - 1], calcnew[j]);
                currentOp = null;
            } else {
                newCalc.push(calcnew[j]);
            }
            console.log(newCalc);
        }
        calcnew = newCalc;
        newCalc = [];
    }
    if (calcnew.length > 1) {
        console.log('Error: unable to resolve calculation');
        return calcnew;
    } else {
        return calcnew[0];
    }

    this.calc = calcnew;
}

  
}
