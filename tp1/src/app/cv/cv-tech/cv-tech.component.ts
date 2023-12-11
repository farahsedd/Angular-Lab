import { Component } from '@angular/core';
import { map, of, switchMap } from 'rxjs';
import { Observable } from 'rxjs';
import {CvService} from "../service/cv.service";
import {EmbaucheService} from "../embauche.service";
import {Cv} from "../Cv";
import { FormControl } from '@angular/forms';

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
  searchControl = new FormControl<string>("");
  filteredCvs$: Observable<Cv[]> = new Observable<Cv[]>();
  allCvs: Cv[] = [];

  async ngOnInit(): Promise<void> {
    this.cvs$ = this.cvService.getAllCvs();
    this.filteredCvs$ = this.cvService.getCvsByName('')
    this.embauchees = this.embaucheService.getEmbauchees();
    const searchValue$ = this.searchControl.valueChanges.pipe(
        switchMap(searchText => this.cvService.getCvsByName(searchText ?? ''))
    );
    this.cvsAbove40$ = this.filteredCvs$.pipe(
        map((cvs) => cvs.filter((cv) => cv.age && cv.age > 40))
    );

    this.cvsBelow40$ = this.filteredCvs$.pipe(
        map((cvs) => cvs.filter((cv) => cv.age && cv.age <= 40))
    );
    searchValue$.subscribe(filteredCvs => {
      this.filteredCvs$ = of(filteredCvs);
    });

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
