import { CanActivateFn } from '@angular/router';

export const secondGuard: CanActivateFn = (route, state) => {
  return true;
};
