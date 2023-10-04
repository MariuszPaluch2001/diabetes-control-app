import { Component } from '@angular/core';
import { DishService } from './services/dish.service';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})
export class DishesComponent {
  constructor(private dishService: DishService) {}
  dishes: Dish[] = [];

  ngOnInit(): void {
    this.dishService.getDishes().subscribe((data) => {
      this.dishes = data;
    });
  }
}
