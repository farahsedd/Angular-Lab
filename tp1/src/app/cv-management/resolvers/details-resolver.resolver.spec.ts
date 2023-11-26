import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { detailsResolverResolver } from './details-resolver.resolver';

describe('detailsResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => detailsResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
