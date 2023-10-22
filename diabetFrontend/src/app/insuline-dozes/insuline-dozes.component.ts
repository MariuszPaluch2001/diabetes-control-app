import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { InsulineDoze } from '../models/insuline-doze';
import { InsulineDozesService } from './services/insuline-dozes.service';

@Component({
  selector: 'app-insuline-dozes',
  templateUrl: './insuline-dozes.component.html',
  styleUrls: ['./insuline-dozes.component.scss'],
})
export class InsulineDozesComponent implements OnInit {
  constructor(private insulineServive: InsulineDozesService) {}
  selectedDate: Date = new Date();
  insulineDozes!: InsulineDoze[];
  allInsulineDozes!: InsulineDoze[];

  ngOnInit(): void {
    this.insulineServive.getInsulineDozes().subscribe({
      next: (data) => {
        this.allInsulineDozes = data;
        this.insulineDozes = this.allInsulineDozes.filter(
          (doze) => doze.timestamp.getDate() == this.selectedDate.getDate()
        );
      },
      error: () => {
        this.allInsulineDozes = [];
        this.insulineDozes = [];
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
    this.insulineDozes = this.allInsulineDozes.filter(
      (doze) => doze.timestamp.getDate() == this.selectedDate.getDate()
    );
  }
}
