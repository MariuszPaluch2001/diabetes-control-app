import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  InsulineDozePost,
  InsulineDozeType,
} from 'src/app/models/insuline-doze';
import { InsulineDozesService } from '../services/insuline-dozes.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from 'src/app/dialog-form/dialog-form.component';

@Component({
  selector: 'app-insuline-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css'],
})
export class SaveInsulineFormComponent implements OnInit {
  types: InsulineDozeType[] = [];
  insulineDozeForm!: FormGroup;
  fieldRequired: string = 'This field is required';

  constructor(
    private fb: FormBuilder,
    private insulineService: InsulineDozesService,
    private dialog: MatDialog
  ) {}

  openDialog(title: string, description: string): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '500px',
      data: { title: title, text: description },
    });
  }

  ngOnInit(): void {
    this.insulineService.getInsulineTypes().subscribe((data) => {
      this.types = data;
      this.insulineDozeForm.controls.type.setValue(this.types[0].label);
    });
    this.createForm();
  }

  createForm() {
    this.insulineDozeForm = this.fb.group({
      units: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      type: ['', Validators.required],
      description: [''],
    });
  }

  getErrorUnits() {
    return this.insulineDozeForm.get('units')!.hasError('required')
      ? 'This field is required (Must be positive number)'
      : this.insulineDozeForm.get('units')!.hasError('pattern')
      ? 'This field must be a positive number'
      : '';
  }

  checkValidation(input: string) {
    const validation =
      this.insulineDozeForm.get(input)!.invalid &&
      (this.insulineDozeForm.get(input)!.dirty ||
        this.insulineDozeForm.get(input)!.touched);
    return validation;
  }

  onSubmit() {
    if (this.insulineDozeForm.valid) {
      this.insulineService
      .saveInsulineDoze(this.mapFormData())
      .subscribe((data) =>
        this.openDialog(
          'Saved successfully',
          'Insuline doze saved successfully'
        )
      );
    } else {
      this.openDialog('Save unsuccessful', 'Something went wrong');
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
