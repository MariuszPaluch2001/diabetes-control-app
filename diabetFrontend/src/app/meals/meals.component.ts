import { Component } from '@angular/core';
import { MealService } from './services/meal.service';
import { Meal } from '../models/meal';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent {
  constructor(private mealServive: MealService) {}
  meals: Meal[] = [];

  ngOnInit(): void {
    this.mealServive.getMeals().subscribe((data) => {
      this.meals = data;
    });
  }

  selectedDate: Date = new Date();

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      return 'special-date';
    };
  }

  onSelect(event: Date | null) {
    this.selectedDate = event!;
  }
}
