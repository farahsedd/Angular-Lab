import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError } from 'rxjs';
import {Cv} from "./Cv";
import {dataService} from "./data";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient ) {
  }
  getAllCvs(): Observable<Cv[]> {
      return this.http.get<Cv[]>('https://apilb.tridevs.net/api/personnes')
        .pipe(
          catchError(e => of(dataService.cvs))
        );
  }

  getCvById(id: string): Observable<Cv> {
    return this.http.get('https://apilb.tridevs.net/api/personnes/' + id).pipe(
      map((obj) => obj as Cv ),
      catchError(e => of(dataService.cvs[0]))
    )
  }

  supprimerCv(id:string): Observable<any> {
      return this.http.delete('https://apilb.tridevs.net/api/personnes/' + id);
    }

  private fillCv = (cv:Cv)=>{
    cv.description = cv.description??"This is the job description"
    cv.followers = cv.followers??"20"
    cv.projects = cv.projects??"10"
    cv.following = cv.following??"10"
    if (!cv.path || cv.path === "") {
      cv.path = "https://brsc.sa.edu.au/wp-content/uploads/2018/09/placeholder-profile-sq.jpg";
    } else {
      cv.path = "assets/" + cv.path;
    }
    return cv;
  }

  getCvsByName(name: string) {
    const filter = encodeURIComponent(`{"where":{"name":{"like":"%${name}%"}}}`);
    const url = `https://apilb.tridevs.net/api/personnes?filter=${filter}`;
    return this.http.get<Cv[]>(url)
        .pipe(
            catchError(e => of(dataService.cvs))
        );;
  }

}
