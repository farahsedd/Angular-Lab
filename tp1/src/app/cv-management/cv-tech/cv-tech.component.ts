import { Component } from '@angular/core';
import {CvService} from "../cv.service";
import {Cv} from "../Cv";

@Component({
  selector: 'app-cv-tech',
  templateUrl: './cv-tech.component.html',
  styleUrls: ['./cv-tech.component.css']
})
export class CvTechComponent {
  constructor(private cvService: CvService) {}

  cvs: Cv[] = [];
  selectedCv: Cv|null = null;

  async ngOnInit(): Promise<void> {
    this.cvs = await this.cvService.getAllCvs();
  }

  onSelect(event:Cv): void {
    this.selectedCv = event;
  }

}
