import { Component, Input } from '@angular/core';
import { InsulineDoze } from 'src/app/models/insuline-doze';

@Component({
  selector: 'app-insuline-row',
  templateUrl: './insuline-row.component.html',
  styleUrls: ['./insuline-row.component.css']
})
export class InsulineRowComponent {
  @Input() insulineSample: InsulineDoze = {} as InsulineDoze;
}
