import { Component, Input, OnInit } from '@angular/core';
import {
  ColorsRBG,
  IParametersChart,
  REGULAR_DEFAULT,
  SURFACEBORDER,
  TEXTCOLORSECONDARY,
} from '../chart';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-regular',
  imports: [BaseChartDirective],
  templateUrl: './chart-regular.component.html',
  styleUrl: './chart-regular.component.scss',
})
export class ChartRegularComponent implements OnInit {
  @Input() parametersChart: IParametersChart = REGULAR_DEFAULT;

  basicOptions: any;
  basicData: any;
  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary =
      documentStyle.getPropertyValue(TEXTCOLORSECONDARY);
    const surfaceBorder = documentStyle.getPropertyValue(SURFACEBORDER);
    let color = ColorsRBG[this.parametersChart.color];

    this.basicData = {
      labels: this.parametersChart.labels,
      datasets: [
        {
          data: this.parametersChart.data,
          fill: true,
          backgroundColor: color.background,
          borderColor: color.border,
          borderWidth: 1,
          tension: 0.4,
        },
      ],
    };

    this.basicOptions = {
      maintainAspectRatio: false,
      indexAxis: this.parametersChart.indexAxis,
      plugins: {
        title: {
          display: false,
        },
        legend: {
          display: false,
          labels: {
            display: false,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
