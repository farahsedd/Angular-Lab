import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cv: any = null;
  ngOnChanges(): void {
    console.log(this.cv);
  }
}
