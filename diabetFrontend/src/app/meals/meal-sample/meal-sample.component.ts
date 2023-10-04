import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DishService } from 'src/app/dishes/services/dish.service';
import { Dish } from 'src/app/models/dish';
import { Meal } from 'src/app/models/meal';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-meal-sample',
  templateUrl: './meal-sample.component.html',
  styleUrls: ['./meal-sample.component.css'],
})
export class MealSampleComponent {
  id: number = 0;

  private sub!: Subscription;

  mealSample: Meal = {} as Meal;
  dish: Dish = {} as Dish;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService,
    private dishService: DishService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
    this.mealService.getMealById(this.id).subscribe({
      next: (data) => {
        this.mealSample = data;
      },
      error: (err) => console.error('An error occurred :', err),
      complete: () =>
        this.dishService.getDishById(this.mealSample.dish).subscribe((data) => {
          this.dish = data;
        }),
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
