import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Observable } from 'rxjs';
import {CvService} from "../cv.service";
import {Cv} from "../Cv";
import {EmbaucheService} from "../embauche.service";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  
  cv$: Observable<Cv> = new Observable<Cv>();
  id: string = "";
  
  constructor( private route :ActivatedRoute, private router:Router,private cvService :CvService,private embaucheService:EmbaucheService) {}
  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params['id'];
    this.cv$ = this.cvService.getCvById(this.id);
    console.log(this.cv$)

 
  }

  supprimer() {
    this.cvService.supprimerCv(this.id);
    this.router.navigate(['/cv-tech']);
  }
  embaucher(){
    this.cv$.subscribe((cv)=>this.embaucheService.embaucher(cv));
    this.router.navigate(['/cv-tech']);
  }
}
