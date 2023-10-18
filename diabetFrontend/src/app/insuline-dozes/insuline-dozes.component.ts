import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { InsulineDoze } from '../models/insuline-doze';
import { InsulineDozesService } from './services/insuline-dozes.service';

@Component({
  selector: 'app-insuline-dozes',
  templateUrl: './insuline-dozes.component.html',
  styleUrls: ['./insuline-dozes.component.css'],
})
export class InsulineDozesComponent implements OnInit {
  constructor(private insulineServive: InsulineDozesService) {}
  insulineDozes: InsulineDoze[] = [];

  ngOnInit(): void {
    this.insulineServive.getInsulineDozes().subscribe((data) => {
      this.insulineDozes = data;
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
