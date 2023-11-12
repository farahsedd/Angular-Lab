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

  @Input() cvs: Cv[] = [];
  @Output() selectCv = new EventEmitter<Cv>();

  onSelect(cv: any): void {
    this.selectCv.emit(cv);
  }
}
