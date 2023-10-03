import { Component, OnInit } from '@angular/core';
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
}
