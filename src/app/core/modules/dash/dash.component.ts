import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { EColors, ETypes, IParametersChart, IParametersChartPizza } from './components/chart';
import { ChartCircleComponent } from './components/chart-circle/chart-circle.component';
import { ChartRegularComponent } from './components/chart-regular/chart-regular.component';

@Component({
  selector: 'app-dash',
  imports: [ChartCircleComponent, ChartRegularComponent],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss'
})
export class DashComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      }
    },
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'],
    datasets: [
      { data: [6200, 7900, 6500, 6500, 6500, 6000], label: 'Entradas' },
      { data: [5000, 5130, 4200, 3800, 3500, 4890], label: 'Gastos' }
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  parametersChartEmpresas: IParametersChart = {
    labels: ['01/2023', '02/2023', '03/2023', '04/2023', '05/2023', '06/2023', '07/2023', '08/2023', '09/2023', '10/2023', '11/2023', '12/2023'],
    data: [540, 325, 702, 620, 540, 325, 702, 620, 540, 325, 702, 620], type: ETypes.BAR, indexAxis: 'x', color: EColors.BLUE
  };

  parametersChartVidas: IParametersChart = {
    labels: ['01/2023', '02/2023', '03/2023', '04/2023', '05/2023', '06/2023'],
    data: [540, 325, 702, 620, 540, 325], type: ETypes.LINE, indexAxis: 'x', color: EColors.PURPLE
  };

  parametersChartHistorico: IParametersChart = {
    labels: ['01/2023', '02/2023', '03/2023', '04/2023', '05/2023', '06/2023'],
    data: [540, 325, 702, 620, 540, 325], type: ETypes.LINE, indexAxis: 'x', color: EColors.ORANGE
  };

  parametersChartPizzaAsos: IParametersChartPizza = {
    labels: ['Admissional ', 'Demissional ', 'Periódico ', 'Mudança risco', 'Retorno ao trabalho'],
    data: [540, 325, 702, 100, 159], type: ETypes.POLARAREA
  };
}
