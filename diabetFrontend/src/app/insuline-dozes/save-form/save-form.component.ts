import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  InsulineDozePost,
  InsulineDozeType,
} from 'src/app/models/insuline-doze';
import { InsulineDozesService } from '../services/insuline-dozes.service';

@Component({
  selector: 'app-insuline-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css'],
})
export class SaveInsulineFormComponent implements OnInit {
  types: InsulineDozeType[] = [];

  constructor(
    private fb: FormBuilder,
    private insulineService: InsulineDozesService
  ) {}

  ngOnInit(): void {
    this.insulineService.getInsulineTypes().subscribe((data) => {
      this.types = data;
      this.insulineDozeForm.controls.type.setValue(this.types[0].label);
    });
  }

  insulineDozeForm = this.fb.group({
    units: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    type: ['', Validators.required],
    description: [''],
  });

  onSave() {
    if (this.insulineDozeForm.valid) {
      this.insulineService
      .saveInsulineDoze(this.mapFormData())
      .subscribe((data) => alert(data));
    } else {
      alert('Data are invalid');
    }
  }

  private mapFormData(): InsulineDozePost {
    return {
      timestamp: new Date(),
      units: Number(this.insulineDozeForm.value.units),
      type: this.types.find(
        (obj) => obj.label === this.insulineDozeForm.value.type
      )?.value!,
      description: this.insulineDozeForm.value.description!,
    };
  }
}
