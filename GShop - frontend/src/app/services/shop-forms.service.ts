import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopFormsService {

  constructor() { }

  getCreditCardMonths(): Observable<number[]>{
    let data : number[] = [];
    for (let month = 1; month <= 12; month++){
      data.push(month);
    }
    return of(data);
  }

  getCreditCardYears() : Observable<number[]> {
    let data : number[] = [];
    for (let year = new Date().getFullYear(); year <= new Date().getFullYear()+10; year++ ){
      data.push(year);
    }
    return of(data);
  }
}
