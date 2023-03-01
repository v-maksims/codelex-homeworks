import { Component } from '@angular/core';
import { PriceService } from './services/price.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public priceService:PriceService){}
  title = '23md angular';
}
