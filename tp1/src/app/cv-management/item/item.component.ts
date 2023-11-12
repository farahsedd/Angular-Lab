import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() cv:{
    "name": string,
    "firstname": string,
    "cin": number,
    "job": string,
    "path": string,
    "age": number,
    "id": number
  } = {
    "name": "",
    "firstname": "",
    "cin": 0,
    "job": "",
    "path": "",
    "age": 0,
    "id": 0
  };

  // @Output() selectCv = new EventEmitter<any>();
  // onSelect(): void {
  //   this.selectCv.emit(this.cv);
  // }
}
