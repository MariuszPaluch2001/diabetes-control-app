import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { glucoseLevel } from 'src/app/models/glucose-level';
import { Color } from '../glucose-row/enums/colors';
import { GlucoseNorms } from 'src/app/enums/glucoseNorms';

@Component({
  selector: 'app-glucose-sample',
  templateUrl: './glucose-sample.component.html',
  styleUrls: ['./glucose-sample.component.css'],
})
export class GlucoseSampleComponent implements OnInit {
  rowColors = Color;
  glucoseNorms = GlucoseNorms;

  id: number = 0;

  private sub!: Subscription;

  glucoseLevel: glucoseLevel = {} as glucoseLevel;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
    this.http
    .get<glucoseLevel>(`http://127.0.0.1:8000/glucoseLevels/${this.id}`)
    .subscribe((data) => {
      this.glucoseLevel = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
