import { Injectable } from '@angular/core';
import {Cv} from "./Cv";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private embauchees: Cv[] = [];

  embaucher (cv: Cv): void {
    if (!this.embauchees.includes(cv)) {
      this.embauchees.push(cv);
      console.log("embauchess",this.embauchees)
    } else {
      alert(`${cv.name} est déjà embauché(e)`);
    }
  }

  debaucher (cv: Cv): void {
    const index = this.embauchees.indexOf(cv);
    if (index >= 0) {
      this.embauchees.splice(index, 1);
    } else {
      alert(`${cv.name} n'est pas embauché(e)`);
    }
  }

  getEmbauchees (): Cv[] {
    return this.embauchees;
  }
}
