import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  GlucoseLevelPost,
  GlucoseLevelType,
} from 'src/app/models/glucose-level';
import { GlucoseLevelService } from '../services/glucose-level.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../../dialog-form/dialog-form.component';
@Component({
  selector: 'app-glucose-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css'],
})
export class SaveGlucoseFormComponent implements OnInit {
  units: GlucoseLevelType[] = [];
  glucoseForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private glucoseService: GlucoseLevelService,
    private dialog: MatDialog
  ) {}

  openDialog(title: string, description: string): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '500px',
      data: { title: title, text: description },
    });
  }

  ngOnInit(): void {
    this.glucoseService.getGlucoseLevelTypes().subscribe((data) => {
      this.units = data;
      this.glucoseForm.controls.unit.setValue(this.units[0].label);
    });
    this.createForm();
  }

  createForm() {
    this.glucoseForm = this.fb.group({
      glucoseLevel: ['', [Validators.required, Validators.pattern('^[0-9]*[1-9][0-9]*$')]],
      unit: ['', Validators.required],
    });
  }

  getErrorGlucoseLevel() {
    return this.glucoseForm.get('glucoseLevel')!.hasError('pattern')
      ? 'This field should be integer number'
      : this.glucoseForm.get('glucoseLevel')!.hasError('required')
      ? 'This field is required'
      : '';
  }

  checkValidation(input: string) {
    const validation =
      this.glucoseForm.get(input)!.invalid &&
      (this.glucoseForm.get(input)!.dirty ||
        this.glucoseForm.get(input)!.touched);
    return validation;
  }

  onSubmit() {
    if (this.glucoseForm.valid) {
      this.glucoseService
      .saveGlucoseLevel(this.mapFormData())
      .subscribe((data) => {
        this.openDialog(
          'Save successfully',
          'Glucose level added successfully'
        );
      });
    } else {
      this.openDialog('Save unsuccessfull', 'Something goes wrong');
    }
  }

  private mapFormData(): GlucoseLevelPost {
    return {
      timestamp: new Date(),
      value: Number(this.glucoseForm.value.glucoseLevel),
      unit: this.units.find((obj) => obj.label === this.glucoseForm.value.unit)
        ?.value!,
    };
  }
}
