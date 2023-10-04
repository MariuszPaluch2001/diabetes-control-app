import { Component, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';

@Component({
  selector: 'app-dish-row',
  templateUrl: './dish-row.component.html',
  styleUrls: ['./dish-row.component.css']
})
export class DishRowComponent {
  @Input() dish: Dish = {} as Dish;
}
