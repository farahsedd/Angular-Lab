import { Component } from '@angular/core';
import {CvService} from "../cv.service";

@Component({
  selector: 'app-cv-tech',
  templateUrl: './cv-tech.component.html',
  styleUrls: ['./cv-tech.component.css']
})
export class CvTechComponent {
  constructor(private cvService: CvService) {}

  cvs: any[] = [];
  selectedCv: any = null;

  async ngOnInit(): Promise<void> {
    this.cvs = await this.cvService.getAllCvs();
  }

  onSelect(event:unknown): void {
    this.selectedCv = event;
  }

}
