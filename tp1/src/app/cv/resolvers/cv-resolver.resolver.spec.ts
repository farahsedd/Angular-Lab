import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { cvResolverResolver } from './cv-resolver.resolver';

describe('cvResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => cvResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
