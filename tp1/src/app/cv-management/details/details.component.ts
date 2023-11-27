import { Component, inject } from '@angular/core';
import { CvService } from '../cv.service';
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

  onClick() {
    const id = this.route.snapshot.params['id'];
    this.cvService.supprimerCv(id).subscribe({
      next: () => {
        this.router.navigate(['cv']);
      },
    });
  }
}
