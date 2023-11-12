import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CvService} from "../cv.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [CvService]
})
export class ListComponent {

  @Input() cvs: any[] = [];
  @Output() selectCv = new EventEmitter<any>();

  onSelect(cv: any): void {
    this.selectCv.emit(cv);
  }
}
