import { Injectable } from '@angular/core';
import {Cv} from "./Cv";
import {dataService} from "./data";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  constructor(private toastr: ToastrService) {}

  embaucher (cv: Cv): void {
    let found = false
    dataService.embauchees.forEach((c)=>{
      if(c.id===cv.id){
        found = true;
      }
    })
    if (!found) {
      dataService.embauchees.push(cv);
      this.toastr.success(`${cv.name} ${cv.firstname} a été embauché(e)`);

    } else {
      this.toastr.error(`${cv.name} ${cv.firstname} est déjà embauché(e)`);

    }
  }

  debaucher (cv: Cv): void {
    const index = dataService.embauchees.indexOf(cv);
    if (index >= 0) {
      dataService.embauchees.splice(index, 1);
    } else {
      alert(`${cv.name} n'est pas embauché(e)`);
    }
  }

  getEmbauchees (): Cv[] {
    return dataService.embauchees;
  }
}
