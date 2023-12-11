import { CanDeactivateFn } from '@angular/router';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AddCvComponent} from "../cv/add-cv/add-cv.component";


// @Injectable({
//   providedIn: 'root'
// })
// export class UnsavedChangesGuard implements CanDeactivate<AddCvComponent>{
//   canDeactivate(
//     component: AddCvComponent,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
//   {
//     //return component.canDeactivate? component.canDeactivate(): true;
//   }
//
// }
