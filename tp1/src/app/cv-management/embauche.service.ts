import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private embauchees: any[] = [];

  embaucher(cv: any): void {
    if (!this.embauchees.includes(cv)) {
      this.embauchees.push(cv);
    } else {
      alert(`${cv.name} est déjà embauché(e)`);
    }
  }

  debaucher(cv: any): void {
    const index = this.embauchees.indexOf(cv);
    if (index >= 0) {
      this.embauchees.splice(index, 1);
    }
  }

  getEmbauchees(): any[] {
    return this.embauchees;
  }
}
