import {Component, Input} from '@angular/core';
import {CvService} from "../cv.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CvService]
})
export class CardComponent {
  constructor( private cvService:CvService) {}
  @Input() cv: any = null;
  async ngOnInit(): Promise<void> {
    this.cv = await this.cvService.getCvById(this.cv.id);
  }
}
