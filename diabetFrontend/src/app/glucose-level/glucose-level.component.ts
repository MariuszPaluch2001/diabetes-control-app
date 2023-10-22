import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { GlucoseLevel } from '../models/glucose-level';
import { GlucoseLevelService } from './services/glucose-level.service';
@Component({
  selector: 'app-glucose-level',
  templateUrl: './glucose-level.component.html',
  styleUrls: ['./glucose-level.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GlucoseLevelComponent implements OnInit {
  constructor(private glucoseServive: GlucoseLevelService) {}

  selectedDate: Date = new Date();

  glucoseLevels!: GlucoseLevel[];
  allGlucoseLevels!: GlucoseLevel[];

  ngOnInit(): void {
    this.glucoseServive.getGlucoseLevels().subscribe({
      next: (data) => {
        this.allGlucoseLevels = data;
        this.glucoseLevels = this.allGlucoseLevels.filter(
          (level) => level.timestamp.getDate() == this.selectedDate.getDate()
        );
      },
      error: () => {
        this.glucoseLevels = [];
        this.allGlucoseLevels = [];
      },
    });
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      return 'special-date';
    };
  }

  onSelect(event: Date | null) {
    this.selectedDate = event!;
    this.glucoseLevels = this.allGlucoseLevels.filter(
      (level) => level.timestamp.getDate() == this.selectedDate.getDate()
    );
  }
}
