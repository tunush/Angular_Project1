import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Number} from '../form/form.component';

@Component({
  selector: 'app-block2-button',
  templateUrl: './block2-button.component.html',
  styleUrls: ['./block2-button.component.css']
})
export class Block2ButtonComponent {

  constructor() { }

  @Input() digitsB2:Number[] = [];
  @Output() deleteDigitsB2 = new EventEmitter();

  deleteDigits() {
    let del = [];

    this.digitsB2.forEach(function(item, i, arr) {
      if (item.checked === true) {
        del.push(item);
      }
    });

    this.digitsB2 = this.digitsB2.filter(function (item) {
      return del.indexOf(item) === -1;
    });

    this.deleteDigitsB2.emit(this.digitsB2);
  }
}
