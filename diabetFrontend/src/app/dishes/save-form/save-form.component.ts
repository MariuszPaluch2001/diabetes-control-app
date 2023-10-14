import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from 'src/app/dialog-form/dialog-form.component';
import { DishPost, DishUnitType } from 'src/app/models/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css'],
})
export class SaveDishFormComponent {
  dishForm!: FormGroup;
  fieldRequired: string = 'This field is required';
  units: DishUnitType[] = [];

  constructor(
    private fb: FormBuilder,
    private dishService: DishService,
    private dialog: MatDialog
  ) {}

  openDialog(title: string, description: string): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '500px',
      data: { title: title, text: description },
    });
  }

  ngOnInit(): void {
    this.dishService.getDishUnits().subscribe((data) => {
      this.units = data;
      this.dishForm.controls.unit.setValue(this.units[0].label);
    });
    this.createForm();
  }

  createForm() {
    this.dishForm = this.fb.group({
      carb_exchange: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      glycemic_index: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      name: ['', Validators.required],
      unit: ['', Validators.required],
      description: [''],
    });
  }

  getErrorGlycemicIndex() {
    return this.dishForm.get('glycemic_index')!.hasError('required')
      ? 'This field is required (Must be positive number)'
      : this.dishForm.get('glycemic_index')!.hasError('pattern')
      ? 'This field must be a positive number'
      : '';
  }

  getErrorCarbExchange() {
    return this.dishForm.get('carb_exchange')!.hasError('required')
      ? 'This field is required (Must be positive number)'
      : this.dishForm.get('carb_exchange')!.hasError('pattern')
      ? 'This field must be a positive number'
      : '';
  }

  checkValidation(input: string) {
    const validation =
      this.dishForm.get(input)!.invalid &&
      (this.dishForm.get(input)!.dirty || this.dishForm.get(input)!.touched);
    return validation;
  }

  onSubmit() {
    if (this.dishForm.valid) {
      this.dishService.saveDish(this.mapFormData()).subscribe((data) => {
        this.openDialog('Save successfully', 'Dish added successfully');
      });
    } else {
      this.openDialog('Save successfull', 'Something went wrong');
    }
  }

  private mapFormData(): DishPost {
    return {
      name: this.dishForm.value.name!,
      carbohydrate_exchange: Number(this.dishForm.value.carb_exchange),
      glycemic_index: Number(this.dishForm.value.glycemic_index),
      description: this.dishForm.value.description!,
      unit: Number(
        this.units.find((obj) => obj.label === this.dishForm.value.unit)?.value!
      ),
    };
  }
}
