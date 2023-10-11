import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';
import { DataPoint } from 'src/app/models/chart-point';
import { InsulineDoze } from 'src/app/models/insuline-doze';

@Component({
  selector: 'app-insuline-chart',
  templateUrl: './insuline-chart.component.html',
  styleUrls: ['./insuline-chart.component.css'],
})
export class InsulineChartComponent implements OnChanges, OnInit {
  @Input() insulineDozes: InsulineDoze[] = [];
  dataPlots: DataPoint[] = [];
  chart: any;
  ngOnInit() {
    this.chart = new CanvasJS.Chart('chartContainer', {
      theme: 'light2',
      animationEnabled: true,
      zoomEnabled: true,
      axisY: {
        title: 'Units',
      },
      axisX: {
        title: 'Timestamp',
        valueFormatString: 'YYYY-MM-DD HH:mm',
      },
      title: {
        text: 'Insuline Dozes Chart',
      },
      data: [
        {
          type: 'column',
          dataPoints: this.dataPlots,
        },
      ],
    });
    this.chart.render();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.insulineDozes.isFirstChange()) {
      return;
    }
    this.dataPlots = changes.insulineDozes.currentValue.map(
      (sample: InsulineDoze) => {
        return {
          x: sample.timestamp,
          y: sample.units,
          color: sample.typeName == 'RAPID-ACTING' ? 'orange' : 'blue'
        };
      }
    );
    this.chart.options.data[0].dataPoints = this.dataPlots;
    this.chart.render();
  }
}
