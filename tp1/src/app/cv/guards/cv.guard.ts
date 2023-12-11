import {Observable} from "rxjs";
import {CanDeactivateFn} from "@angular/router";
export interface CanDesactivate {
  CanDeactivate: () => Observable<boolean> | boolean;
}
export const cvGuard: CanDeactivateFn<CanDesactivate> = (component: CanDesactivate) => {
  return component.CanDeactivate ? component.CanDeactivate() : true;
};
