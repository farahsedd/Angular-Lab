import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor() { }

  async getAllCvs() {
    try {
      const response = await fetch('https://apilb.tridevs.net/api/personnes');
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}
