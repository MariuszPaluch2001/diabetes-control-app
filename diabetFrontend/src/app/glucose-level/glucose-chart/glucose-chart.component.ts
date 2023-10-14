import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';
import { DataPoint } from 'src/app/models/chart-point';
import { GlucoseLevel } from 'src/app/models/glucose-level';

@Component({
  selector: 'app-glucose-chart',
  templateUrl: './glucose-chart.component.html',
  styleUrls: ['./glucose-chart.component.css'],
})
export class GlucoseChartComponent implements OnChanges, OnInit {
  @Input() glucoseLevels: GlucoseLevel[] = [];
  dataPlots: DataPoint[] = [];
  chart: any;

  constructor() {}

  ngOnInit() {
    this.chart = new CanvasJS.Chart('chartContainerGlucose', {
      theme: 'light2',
      animationEnabled: true,
      zoomEnabled: true,
      axisY: {
        title: 'Glucose Level [mg/dL]',
      },
      axisX: {
        title: 'Timestamp',
        valueFormatString: 'YYYY-MM-DD HH:mm',
      },
      title: {
        text: 'Glucose Level Chart',
      },
      data: [
        {
          type: 'line',
          dataPoints: this.dataPlots,
        },
      ],
    });
    this.chart.render();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.glucoseLevels.isFirstChange()) {
      return;
    }
    this.dataPlots = changes.glucoseLevels.currentValue.map(
      (sample: GlucoseLevel) => {
        return {
          x: sample.timestamp,
          y: sample.value,
        };
      }
    );
    this.chart.options.data[0].dataPoints = this.dataPlots;
    this.chart.render();
  }
}
