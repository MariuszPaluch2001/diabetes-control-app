import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../services/meal.service';
import { Meal } from 'src/app/models/meal';

@Component({
  selector: 'app-meal-sample',
  templateUrl: './meal-sample.component.html',
  styleUrls: ['./meal-sample.component.css']
})
export class MealSampleComponent {
  id: number = 0;

  private sub!: Subscription;

  mealSample: Meal = {} as Meal;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
    this.mealService.getMealById(this.id).subscribe((data) => {
      this.mealSample = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
