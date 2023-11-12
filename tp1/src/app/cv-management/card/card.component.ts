import {Component, Input, OnInit} from '@angular/core';
import {CvService} from "../cv.service";
import {NavigationExtras, Router} from "@angular/router";
import {Cv} from "../Cv";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CvService],
})
export class CardComponent{
  constructor( private cvService:CvService,private router:Router) {}
  @Input() cv: Cv = {} as Cv ;
  async ngOnInit(): Promise<void> {
    this.cv = await this.cvService.getCvById(this.cv.id);
  }

  navigate() {
    this.router.navigate(['cv', this.cv.id]);
  }
}
