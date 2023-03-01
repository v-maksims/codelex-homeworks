import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  constructor() { }
  price$ = new BehaviorSubject<number>(0) 
}
