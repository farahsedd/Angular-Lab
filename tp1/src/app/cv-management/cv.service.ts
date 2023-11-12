import {Injectable} from '@angular/core';
import {Cv} from "./Cv";
import {dataService} from "./data";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  async getAllCvs(): Promise<Cv[]> {
    try {
      console.log("getAll",dataService.cvs)
      if (dataService.cvs.length === 0) {
        const response = await fetch('https://apilb.tridevs.net/api/personnes');
        const cvs = (await response.json() ) as Cv[]
        dataService.cvs = cvs.map(this.fillCv);
      }
      return dataService.cvs;
    } catch (error) {
      alert(""+error);
    }
    return [] as Cv[];
  }

  async getCvById(id:string):Promise<Cv> {
    try {
      console.log("get",dataService.cvs)
      const response = await fetch(`https://apilb.tridevs.net/api/personnes/${id}`);
      const cv =  await response.json();
      return this.fillCv(cv);
    } catch (error) {
      alert(""+error);
    }
    return {} as Cv;
  }

  supprimerCv(id:string):void {
    const selected = dataService.cvs.findIndex((cv:Cv)=>cv.id===id)
    console.log("supp",dataService.cvs)
    if(selected>=0){
      dataService.cvs.splice(selected,1);
    } else {
      alert("Cv not found")
    }
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
}
