import { Component, inject } from '@angular/core';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, of } from 'rxjs';
import { Cv } from '../Cv';

@Component({
  selector: 'app-master-details-cv',
  templateUrl: './master-details-cv.component.html',
  styleUrls: ['./master-details-cv.component.css']
})
export class MasterDetailsCvComponent {
  
  cvService = inject(CvService);
  toaster = inject(ToastrService);
  router = inject(Router);

  selectedCv: Cv|null = null;
  cvs$: Observable<Cv[]>

  constructor(){
    this.cvs$ = this.cvService.getAllCvs().pipe(
      catchError((res)=> {
        this.toaster.error("Couldn't get CVs");
        return of(res);
      })
    )
  }

  showDetails(cv: Cv){
    console.log("navigating to... cv/list/"+cv.id);
    this.router.navigate(['cv', 'list', cv.id]);
  }

}