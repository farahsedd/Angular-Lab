import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Cv} from "../Cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() cv:Cv = {} as Cv;

}
