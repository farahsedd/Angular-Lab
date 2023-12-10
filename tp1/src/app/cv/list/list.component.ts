import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CvService} from "../cv.service";
import {Cv} from "../Cv";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [CvService]
})
export class ListComponent {

  @Input() cvs: Cv[] | null = [];
  @Output() selectCv = new EventEmitter<Cv>();

  @Output() onItemClick = new EventEmitter<Cv>();

  // @Input()
  // onItemClick!: (cv: Cv)=>void;
  
  onClick(cv: any): void {
    this.onItemClick.emit(cv);
  }

  onSelect(cv: any): void {
    this.selectCv.emit(cv);
  }
}
