import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { GlucoseLevel } from '../models/glucose-level';
import { GlucoseLevelService } from './services/glucose-level.service';
@Component({
  selector: 'app-glucose-level',
  templateUrl: './glucose-level.component.html',
  styleUrls: ['./glucose-level.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GlucoseLevelComponent implements OnInit {
  constructor(private glucoseServive: GlucoseLevelService) {}

  glucoseLevels: GlucoseLevel[] = [];

  ngOnInit(): void {
    this.glucoseServive.getGlucoseLevels().subscribe({
      next: (data) => {
        this.glucoseLevels = data;
      },
    });
  }

  selectedDate: Date = new Date();
  event: any;

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      return 'special-date';
    };
  }

  onSelect(event: Date | null) {
    this.selectedDate = event!;
  }
}
