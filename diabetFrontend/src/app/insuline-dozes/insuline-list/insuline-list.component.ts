import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InsulineType } from 'src/app/enums/insulineTypes';
import { InsulineDoze } from 'src/app/models/insuline-doze';

@Component({
  selector: 'app-insuline-list',
  templateUrl: './insuline-list.component.html',
  styleUrls: ['./insuline-list.component.scss'],
})
export class InsulineListComponent {
  @Input() insulineDozes!: InsulineDoze[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  insulineTypes = InsulineType;
  displayedColumns: string[] = [
    'timestamp',
    'units',
    'description',
    'typeName',
  ];
  dataSource: MatTableDataSource<InsulineDoze> = new MatTableDataSource();

  ngOnInit(): void {
    this.initDataSource();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initDataSource();
  }

  initDataSource() {
    this.dataSource = new MatTableDataSource(this.insulineDozes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
