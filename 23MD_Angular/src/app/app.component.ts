import { Component } from '@angular/core';
import { PriceService } from './services/price.service';

type TService = {
  title: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public priceService:PriceService){}

  title = '23md angular';

  services: TService[] = [
    {title: 'web development', price: 300},
    {title: 'design', price: 400},
    {title: 'integration', price: 250},
    {title: 'training', price: 220},
  ]
}
