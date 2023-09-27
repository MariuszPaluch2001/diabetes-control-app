import { Component, OnInit } from '@angular/core';
import { glucoseLevel } from '../models/glucose-level';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-glucose-level',
  templateUrl: './glucose-level.component.html',
  styleUrls: ['./glucose-level.component.css'],
})
export class GlucoseLevelComponent implements OnInit {
  constructor(private http: HttpClient) {}
  glucoseLevels: glucoseLevel[] = [];

  ngOnInit(): void {
    this.http
    .get<glucoseLevel[]>('http://127.0.0.1:8000/glucoseLevels/')
    .subscribe((data) => {
      this.glucoseLevels = data;
    });
  }
}
