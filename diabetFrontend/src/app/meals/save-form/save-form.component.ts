import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from 'src/app/dialog-form/dialog-form.component';
import { DishService } from 'src/app/dishes/services/dish.service';
import { Dish } from 'src/app/models/dish';
import { MealPost } from 'src/app/models/meal';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.scss'],
})
export class SaveMealFormComponent {
  mealForm!: FormGroup;
  dishes: Dish[] = [];

  constructor(
    private fb: FormBuilder,
    private dishService: DishService,
    private mealService: MealService,
    private dialog: MatDialog
  ) {}

  openDialog(title: string, description: string): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '500px',
      data: { title: title, text: description },
    });
  }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe((data) => {
      this.dishes = data;
      this.mealForm.controls.dish.setValue(this.dishes[0].Id);
    });
    this.createForm();
  }

  createForm() {
    this.mealForm = this.fb.group({
      quantity: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      dish: ['', Validators.required],
      description: [''],
    });
  }

  getErrorQuantity() {
    return this.mealForm.get('quantity')!.hasError('required')
      ? 'This field is required (Must be positive number)'
      : this.mealForm.get('quantity')!.hasError('pattern')
      ? 'This field should be a positive number'
      : '';
  }

  checkValidation(input: string) {
    const validation =
      this.mealForm.get(input)!.invalid &&
      (this.mealForm.get(input)!.dirty || this.mealForm.get(input)!.touched);
    return validation;
  }

  onSubmit() {
    if (this.mealForm.valid) {
      this.mealService.saveMeal(this.mapFormData()).subscribe((data) => {
        this.openDialog('Save successfully', 'Meal added successfully');
      });
    } else {
      this.openDialog('Save unsuccessfull', 'Something goes wrong');
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
