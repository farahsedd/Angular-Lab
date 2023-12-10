import { Component, OnInit } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, CanDeactivate, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Cv} from "../model/cv";
import {CvService} from "../../cv/cv.service";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  response$!: Observable<any>;
  addForm!: FormGroup;
  id: string;

  constructor(
    private cvService: CvService,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toast: ToastrService
  ) {
    // @ts-ignore
    this.id = this.activatedroute.snapshot.params['id']
    console.log(this.id)
    let cv$:Observable<Cv>;
    if (this.id) {
      cv$ = this.cvService.getCvById(this.id).pipe(map((c) => (c ? c : new Cv())));
    }
    else cv$ = of(new Cv());
    cv$.subscribe((c) => {
      console.log(c)
      this.addForm = this.fb.group({
        name: [c.name, Validators.required],
        firstname: [c.firstname, Validators.required],
        job: [c.job, Validators.required],
        age: [c.age, [Validators.required, Validators.min(0), Validators.max(70)]],
        cin: [c.cin, Validators.required],
        path: ['', Validators.required]
      })})
  }

  ngOnInit(): void {}

  add(cv: Cv) {
      this.response$ = this.cvService.addCv(this.addForm.value).pipe(
        tap(() => {
          this.toast.success('Cv ajouté avec succès');
          this.addForm.reset();
        })
      );


    this.response$.subscribe();
  }



}
