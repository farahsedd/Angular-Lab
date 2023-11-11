import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowWordComponent } from './rainbow-word.component';

describe('RainbowWordComponent', () => {
  let component: RainbowWordComponent;
  let fixture: ComponentFixture<RainbowWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RainbowWordComponent]
    });
    fixture = TestBed.createComponent(RainbowWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
