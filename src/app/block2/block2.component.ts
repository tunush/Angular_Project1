import { Component, Input } from '@angular/core';
import {Number} from '../form/form.component';

@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html',
  styleUrls: ['./block2.component.css']
})
export class Block2Component {

  constructor() { }

  @Input() digitsB2:Number[] = [];

  deleteDigitsB2(digits:Number[]) {
    this.digitsB2 = digits;
  }

}
