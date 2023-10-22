import { Component } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { Meal } from '../models/meal';
import { MealService } from './services/meal.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent {
  constructor(private mealServive: MealService) {}
  selectedDate: Date = new Date();
  meals!: Meal[];
  allMeals!: Meal[];

  ngOnInit(): void {
    this.mealServive.getMeals().subscribe({
      next: (data) => {
        this.allMeals = data;
        this.meals = this.allMeals.filter(
          (meal) => meal.timestamp.getDate() == this.selectedDate.getDate()
        );
      },
      error: () => {
        this.allMeals = [];
        this.meals = [];
      },
    });
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      return 'special-date';
    };
  }

  onSelect(event: Date | null) {
    this.selectedDate = event!;
    this.meals = this.allMeals.filter(
      (meal) => meal.timestamp.getDate() == this.selectedDate.getDate()
    );
  }
}
