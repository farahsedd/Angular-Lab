import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, merge, takeUntil } from 'rxjs';
import { scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css'],
})
export class MergeComponent implements OnInit {
  form!: FormGroup;
  scan!: Observable<number>;
  merge!: Observable<number>;
  reduce!: Observable<number>;
  private terminate1 = new Subject<void>();
  private terminate2 = new Subject<void>();

  ngOnInit(): void {
    this.form = new FormGroup({
      input1: new FormControl(null, {
        validators: [],
        asyncValidators: [],
        updateOn: 'blur',
      }),
      input2: new FormControl(null, {
        validators: [],
        asyncValidators: [],
        updateOn: 'blur',
      }),
    });

    this.setupObservables();
  }

  private setupObservables() {
    const in1: Observable<number> = this.form
      .get('input1')!
      .valueChanges.pipe(takeUntil(this.terminate1));
    const in2: Observable<number> = this.form
      .get('input2')!
      .valueChanges.pipe(takeUntil(this.terminate2));

    this.merge = merge(in1, in2);

    this.reduce = this.merge.pipe(
      reduce((total, currentValue) => total + currentValue, 0)
    );

    this.scan = this.merge.pipe(
      scan((total, currentValue) => total + currentValue, 0)
    );
  }

  terminateStream1() {
    this.terminate1.next();
    this.terminate1.complete();
  }

  terminateStream2() {
    this.terminate2.next();
    this.terminate2.complete();
  }

  resetValues() {
    this.terminate1 = new Subject<void>()
    this.terminate2 = new Subject<void>()
    this.form.reset()
    this.setupObservables();
  }

}
