import { Component, Input } from '@angular/core';
import { Meal } from 'src/app/models/meal';

@Component({
  selector: 'app-meal-row',
  templateUrl: './meal-row.component.html',
  styleUrls: ['./meal-row.component.css'],
})
export class MealRowComponent {
  @Input() meal: Meal = {} as Meal;
}
