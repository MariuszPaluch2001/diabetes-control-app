import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlucoseNorms } from 'src/app/enums/glucoseNorms';
import { GlucoseLevel } from 'src/app/models/glucose-level';
import { Color } from '../glucose-list/enums/colors';
import { GlucoseLevelService } from '../services/glucose-level.service';

@Component({
  selector: 'app-glucose-sample',
  templateUrl: './glucose-sample.component.html',
  styleUrls: ['./glucose-sample.component.scss'],
})
export class GlucoseSampleComponent implements OnInit {
  rowColors = Color;
  glucoseNorms = GlucoseNorms;

  id: number = 0;

  private sub!: Subscription;

  glucoseLevel: GlucoseLevel = {} as GlucoseLevel;

  constructor(
    private route: ActivatedRoute,
    private glucoseService: GlucoseLevelService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
    this.glucoseService.getGlucoseLevelById(this.id).subscribe((data) => {
      this.glucoseLevel = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
