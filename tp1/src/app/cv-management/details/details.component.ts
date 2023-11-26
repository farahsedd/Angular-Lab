import { Component, inject } from '@angular/core';
import { CvService } from '../cv.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor() {
    this.route.data.subscribe((data) => {
      if (data['cv'] == null) {
        this.toaster.error('Aucun cv trouvé');
        this.router.navigate(['']);
      }
      this.cv = data['cv'];
    });
  }

  onClick() {
    const id = this.route.snapshot.params['id'];
    this.cvService.supprimerCv(id).subscribe({
      next: () => {
        this.router.navigate(['cv']);
      },
    });
  }
}
