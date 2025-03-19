import { Component } from '@angular/core';
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
