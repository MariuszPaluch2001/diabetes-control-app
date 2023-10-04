import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DishService } from '../services/dish.service';
import { DishPost, DishUnitType } from 'src/app/models/dish';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css'],
})
export class SaveDishFormComponent {
  units: DishUnitType[] = [];

  constructor(private fb: FormBuilder, private dishService: DishService) {}

  ngOnInit(): void {
    this.dishService.getDishUnits().subscribe((data) => {
      this.units = data;
      this.dishForm.controls.unit.setValue(this.units[0].label);
    });
  }

  dishForm = this.fb.group({
    carb_exchange: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    glycemic_index: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    name: ['', Validators.required],
    unit: ['', Validators.required],
    description: [''],
  });

  onSave() {
    if (this.dishForm.valid) {
      this.dishService.saveDish(this.mapFormData()).subscribe((data) => {
        alert(data);
      });
    } else {
      alert('Data are invalid');
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
