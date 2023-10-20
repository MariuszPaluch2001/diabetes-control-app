import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Meal } from 'src/app/models/meal';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss'],
})
export class MealRowComponent {
  @Input() meals!: Meal[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    'timestamp',
    'dish_name',
    'quantity',
    'description',
  ];
  dataSource: MatTableDataSource<Meal> = new MatTableDataSource();

  ngOnInit(): void {
    this.initDataSource();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initDataSource();
  }

  initDataSource() {
    this.dataSource = new MatTableDataSource(this.meals);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
