import { Component, inject } from '@angular/core';
import { CvService } from '../service/cv.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../Cv';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  cvService = inject(CvService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  toaster = inject(ToastrService);

  cv!: Cv;

  ngOnInit() {
    this.getCv()
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd){
        this.getCv()
      }
    });
  }


  getCv(){const id = this.route.snapshot.params['id'];
  this.cvService.getCvById(id).subscribe(
    (data)=>{
      this.cv=data
    }
  );}

  delete() {

    if (this.cv) {
      this.cvService.supprimerCv(parseInt(this.cv.id)).subscribe(
        {
          next: () => {


            //this.router.navigate(['/cv']);
          },
          error: (error) => {
            console.error('Error deleting CV:', error);
          }
        }
      );
    }
  }


  update() {
    if (this.cv) {
      const link = ['cv/update', this.cv.id];
      console.log(this.cv.id)
      this.router.navigate(link);
    }
  }

}
