import { Component } from '@angular/core';
import {CvService} from "../cv.service";
import {EmbaucheService} from "../embauche.service";
import {Cv} from "../Cv";

@Component({
  selector: 'app-cv-tech',
  templateUrl: './cv-tech.component.html',
  styleUrls: ['./cv-tech.component.css'],
  providers: [CvService,EmbaucheService]
})
export class CvTechComponent {
  constructor(private cvService: CvService,private embaucheService : EmbaucheService) {}

  embauchees : Cv[] = [];
  cvs: Cv[] = [];
  selectedCv: Cv|null = null;

  async ngOnInit(): Promise<void> {
    this.cvs = await this.cvService.getAllCvs();
    this.embauchees = this.embaucheService.getEmbauchees();
  }

  onSelect(event:Cv): void {
    this.selectedCv = event;
  }
  onAddEmbauche(event:Cv[]): void {
    this.embauchees = event;
  }

}
