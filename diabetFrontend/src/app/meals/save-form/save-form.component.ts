import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DishService } from 'src/app/dishes/services/dish.service';
import { MealService } from '../services/meal.service';
import { Meal, MealPost } from 'src/app/models/meal';
import { Dish } from 'src/app/models/dish';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css'],
})
export class SaveMealFormComponent {
  dishes: Dish[] = [];

  constructor(
    private fb: FormBuilder,
    private dishService: DishService,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    this.dishService.getDishes().subscribe((data) => {
      this.dishes = data;
      this.mealForm.controls.dish.setValue(this.dishes[0].Id);
    });
  }

  mealForm = this.fb.group({
    quantity: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    dish: ['', Validators.required],
    description: [''],
  });

  onSave() {
    if (this.mealForm.valid) {
      this.mealService.saveMeal(this.mapFormData()).subscribe((data) => {
        alert(data);
      });
    } else {
      alert('Data are invalid');
    }
  }

  private mapFormData(): MealPost {
    return {
      timestamp: new Date(),
      quantity: Number(this.mealForm.value.quantity),
      description: this.mealForm.value.description!,
      dish: Number(this.mealForm.value.dish),
    };
  }
}
