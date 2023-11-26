import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PaginatedListComponent} from './paginated-list.component';

describe('PaginatedListComponent', () => {
  let component: PaginatedListComponent;
  let fixture: ComponentFixture<PaginatedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatedListComponent]
    });
    fixture = TestBed.createComponent(PaginatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
