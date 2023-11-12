import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CvService} from "../cv.service";
import {EmbaucheService} from "../embauche.service";
import {NavigationExtras, Router} from "@angular/router";
import {Cv} from "../Cv";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CvService,EmbaucheService]
})

export class CardComponent{
  constructor( private cvService:CvService,private embaucheService:EmbaucheService,private router:Router) {}
  @Input() cv: Cv = {} as Cv ;
  @Output() AddEmbauchee = new EventEmitter<any>();
  async ngOnInit(): Promise<void> {
    this.cv = await this.cvService.getCvById(this.cv.id);
  }
  embaucher(): void {
    if (this.cv) {
      this.embaucheService.embaucher(this.cv);
      this.AddEmbauchee.emit(this.embaucheService.getEmbauchees())
    }
  }

  navigate() {
    this.router.navigateByUrl('/cv/'+ this.cv.id);
  }
}
