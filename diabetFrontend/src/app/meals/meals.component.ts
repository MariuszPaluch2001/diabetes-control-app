import { Component } from '@angular/core';
import { MealService } from './services/meal.service';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent {
  constructor(private mealServive: MealService) {}
  meals: Meal[] = [];

  ngOnInit(): void {
    this.mealServive.getMeals().subscribe((data) => {
      this.meals = data;
    });
  }
}
