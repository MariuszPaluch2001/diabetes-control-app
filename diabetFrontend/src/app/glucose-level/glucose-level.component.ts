import { Component, OnInit } from '@angular/core';
import { GlucoseLevel } from '../models/glucose-level';
import { GlucoseLevelService } from './services/glucose-level.service';

@Component({
  selector: 'app-glucose-level',
  templateUrl: './glucose-level.component.html',
  styleUrls: ['./glucose-level.component.css'],
})
export class GlucoseLevelComponent implements OnInit {
  constructor(private glucoseServive: GlucoseLevelService) {}
  glucoseLevels: GlucoseLevel[] = [];

  ngOnInit(): void {
    this.glucoseServive
    .getGlucoseLevels()
    .subscribe((data) => {
      this.glucoseLevels = data;
    });
  }
}
