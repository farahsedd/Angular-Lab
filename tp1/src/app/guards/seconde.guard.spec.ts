import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { secondeGuard } from './seconde.guard';

describe('secondeGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => secondeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
