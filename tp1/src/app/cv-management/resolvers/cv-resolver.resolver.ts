import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Cv } from '../Cv';
import { CvService } from '../cv.service';

export const cvResolver: ResolveFn<Cv[] | null> = (route, state) => {
  const cvService = inject(CvService);

  return cvService.getAllCvs();
};