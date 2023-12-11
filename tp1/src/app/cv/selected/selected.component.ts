import {Component, Input} from '@angular/core';
import {EmbaucheService} from "../embauche.service";
import {CvService} from "../service/cv.service";

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css'],
  providers: [CvService,EmbaucheService]
})
export class SelectedComponent {
  @Input() personnesEmbauchees: any[] = [];

  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {

  }
}
