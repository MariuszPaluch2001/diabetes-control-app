import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  GlucoseLevelPost,
  GlucoseLevelType,
} from 'src/app/models/glucose-level';
import { GlucoseLevelService } from '../services/glucose-level.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
@Component({
  selector: 'app-glucose-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css'],
})
export class SaveGlucoseFormComponent implements OnInit {
  units: GlucoseLevelType[] = [];

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
  }

  glucoseForm = this.fb.group({
    glucoseLevel: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    unit: ['', Validators.required],
  });

  onSave() {
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
