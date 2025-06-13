import { Component, Input, OnInit } from '@angular/core';
import { CIRCLE_DEFAULT, IParametersChartPizza } from '../chart';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-circle',
  imports: [BaseChartDirective],
  templateUrl: './chart-circle.component.html',
  styleUrl: './chart-circle.component.scss',
})
export class ChartCircleComponent implements OnInit {
  @Input() parametersChart: IParametersChartPizza = CIRCLE_DEFAULT;
  data = {};
  options = {};

  ngOnInit(): void {
    this.data = {
      labels: this.parametersChart.labels,
      datasets: [
        {
          data: this.parametersChart.data,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };
  }
}
