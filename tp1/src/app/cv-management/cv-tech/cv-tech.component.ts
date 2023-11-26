import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import {CvService} from "../cv.service";
import {EmbaucheService} from "../embauche.service";
import {Cv} from "../Cv";

@Component({
  selector: 'app-cv-tech',
  templateUrl: './cv-tech.component.html',
  styleUrls: ['./cv-tech.component.css'],
  providers: [CvService,EmbaucheService]
})
export class CvTechComponent {
  constructor(private cvService: CvService,private embaucheService : EmbaucheService) {}

  embauchees : Cv[] = [];
  cvs$: Observable<Cv[]> = new Observable<Cv[]>();
  selectedCv: Cv|null = null;
  cvsAbove40$: Observable<Cv[]> = new Observable<Cv[]>();
  cvsBelow40$: Observable<Cv[]> = new Observable<Cv[]>();
  shouldDisplayAbove40: boolean = false;

  async ngOnInit(): Promise<void> {
    this.cvs$ = this.cvService.getAllCvs();
    this.embauchees = this.embaucheService.getEmbauchees();
    this.cvsAbove40$ = this.cvs$. pipe(
      map((cvs) => cvs.filter((cv) => cv.age && cv.age > 40))
    );

    this.cvsBelow40$ = this.cvs$.pipe(
      map((cvs) => cvs.filter((cv) => cv.age && cv.age <= 40))
    );
  }

  onSelect(event:Cv): void {
    this.selectedCv = event;
  }
  onAddEmbauche(event:Cv[]): void {
    this.embauchees = event;
  }
  changeTab(event: boolean): void {
    this.shouldDisplayAbove40 = event;
  }

}
