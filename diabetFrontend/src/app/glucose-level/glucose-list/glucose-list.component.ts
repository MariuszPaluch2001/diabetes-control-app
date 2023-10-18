import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GlucoseNorms } from 'src/app/enums/glucoseNorms';
import { GlucoseLevel } from 'src/app/models/glucose-level';
import { Color } from './enums/colors';

@Component({
  selector: 'app-glucose-list',
  templateUrl: './glucose-list.component.html',
  styleUrls: ['./glucose-list.component.scss'],
})
export class GlucoseListComponent implements OnChanges {
  @Input() glucoseLevels!: GlucoseLevel[];
  rowColors = Color;
  glucoseNorms = GlucoseNorms;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['timestamp', 'value', 'status'];
  dataSource: MatTableDataSource<GlucoseLevel> = new MatTableDataSource();

  ngOnInit(): void {
    this.initDataSource();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initDataSource();
  }

  initDataSource() {
    this.dataSource = new MatTableDataSource(this.glucoseLevels);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
