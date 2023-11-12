import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CvService} from "../cv.service";
import {Cv} from "../Cv";
import {EmbaucheService} from "../embauche.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  constructor( private route :ActivatedRoute, private router:Router,private cvService :CvService,private embaucheService:EmbaucheService) {}
  cv: Cv = {} as Cv;
  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params['id'];
    this.cv = await this.cvService.getCvById(id);
    console.log(this.cv)
  }

  supprimer() {
    this.cvService.supprimerCv(this.cv.id);
    this.router.navigate(['/cv-tech']);
  }
  embaucher(){
    this.embaucheService.embaucher(this.cv);
    this.router.navigate(['/cv-tech']);
  }
}
