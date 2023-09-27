import { Component, Input } from '@angular/core';
import { glucoseLevel } from 'src/app/models/glucose-level';
import { Color } from './enums/colors';
import { GlucoseNorms } from 'src/app/enums/glucoseNorms';

@Component({
  selector: 'app-glucose-row',
  templateUrl: './glucose-row.component.html',
  styleUrls: ['./glucose-row.component.css'],
})
export class GlucoseRowComponent {
  @Input() glucoseSample!: glucoseLevel;
  rowColors = Color;
  glucoseNorms = GlucoseNorms;
}
