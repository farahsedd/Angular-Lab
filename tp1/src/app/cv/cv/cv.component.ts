import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Observable } from 'rxjs';
import {CvService} from "../service/cv.service";
import {Cv} from "../Cv";
import {EmbaucheService} from "../embauche.service";
import { FormControl } from '@angular/forms';
import {AuthentificationService} from "../../auth/Services/authentification.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {

  cv$: Observable<Cv> = new Observable<Cv>();
  id: string = "";
  isLoggedIn$ : Observable<boolean>

  constructor( private authentificationService: AuthentificationService,private route :ActivatedRoute, private router:Router,private cvService :CvService,private embaucheService:EmbaucheService) {
    this.isLoggedIn$ = this.authentificationService.isAuthenticated$;
  }
  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params['id'];
    this.cv$ = this.cvService.getCvById(this.id);
    console.log(this.cv$)


  }

  supprimer() {

         this.cvService.supprimerCv(parseInt(this.id)).subscribe(
          {
            next: () => {
              this.router.navigate(['/cv-tech']);
            },
            error: (error) => {
              console.error('Error deleting CV:', error);
            }
          }
        );


  }

  modifier (){

      const link = ['cv/update', this.id];
      console.log(this.id)
      this.router.navigate(link);



  }
  embaucher(){
    this.cv$.subscribe((cv)=>this.embaucheService.embaucher(cv));
    this.router.navigate(['/cv-tech']);
  }
}
