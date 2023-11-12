import {Injectable} from '@angular/core';
import {Cv} from "./Cv";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  cvs: Cv[] = [];
  async getAllCvs(): Promise<Cv[]> {
    try {
      if (this.cvs.length === 0) {
      const response = await fetch('https://apilb.tridevs.net/api/personnes');
      const cvs = (await response.json() ) as Cv[]
      this.cvs = cvs.map((cv:Cv)=>{
        cv.description = cv.description??"This is the job description"
        cv.followers = cv.followers??"20"
        cv.projects = cv.projects??"10"
        cv.following = cv.following??"10"
        return cv;
      })}
      return this.cvs;
    } catch (error) {
      alert(""+error);
    }
    return [] as Cv[];
  }
  async getCvById(id:string):Promise<Cv> {
    try {
      const response = await fetch(`https://apilb.tridevs.net/api/personnes/${id}`);
      const cv =  await response.json();
      cv.description = cv.description??"This is the job description"
      cv.followers = cv.followers??"20"
      cv.projects = cv.projects??"10"
      cv.following = cv.following??"10"
      return cv;
    } catch (error) {
      alert(""+error);
    }
    return {} as Cv;
  }

  supprimerCv(id:string):void {
    const selected = this.cvs.findIndex((cv:Cv)=>cv.id===id)
    if(selected>=0){
      this.cvs.splice(selected,1);
    } else {
      alert("Cv not found")
    }
  }
}
