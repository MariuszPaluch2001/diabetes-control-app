import { Component } from '@angular/core';
import { DishService } from './services/dish.service';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss'],
})
export class DishesComponent {
  constructor(private dishService: DishService) {}
  dishes!: Dish[];

  ngOnInit(): void {
    this.dishService.getDishes().subscribe({
      next: (data) => {
        this.dishes = data;
      },
      error: () => {
        this.dishes = [];
      },
    });
  }
}
