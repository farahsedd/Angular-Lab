import { CanDeactivateFn } from '@angular/router';
import { AddCvComponent } from '../cv/add-cv/add-cv.component';

export const secondeGuard: CanDeactivateFn<AddCvComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canDeactivate? component.canDeactivate(): true;
};
