import { Component, ViewEncapsulation} from '@angular/core';

export class Number{
  constructor(public digit: number, public checked: boolean = false) {}
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent {
  digit:number;
  digits:Number[] = [];
  dis = true;

  constructor() {
    // setTimeout (() => {
    //   this.dis = false;
    // }, 3000);
  }

  addDigit(digit:number, checked:boolean) {
    this.digits.push(new Number(digit, checked));
    this.digit = null;
  }

  onKeyUp() {
    this.dis = true;
  }
}
