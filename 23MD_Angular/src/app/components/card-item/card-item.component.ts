import { Component, Input } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  constructor(public priceService: PriceService) { }

  @Input() title: string
  @Input() price: number

  selected = false

  clickHandler() {
    this.selected = !this.selected
    if (this.selected) {
      return this.priceService.add(+this.price)
    }
    this.priceService.subtract(+this.price)

  }
}
