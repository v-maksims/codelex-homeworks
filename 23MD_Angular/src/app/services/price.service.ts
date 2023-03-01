import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  constructor() { }
  price$ = new BehaviorSubject<number>(0)
  add(price: number){
    this.price$.next(this.price$.value + price)
  }
  
  subtract(price: number){
    this.price$.next(this.price$.value - price)
  }

}
