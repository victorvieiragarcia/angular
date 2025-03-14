export interface IParametersChart {
  labels: any;
  data: any[];
  type: ETypes;
  indexAxis: 'y' | 'x';
  color: EColors;
}

export interface IParametersChartPizza {
  labels: any;
  data: any[];
  type: ETypes;
}

export enum ETypes {
  BAR = 'bar',
  LINE = 'line',
  POLARAREA = 'polarArea',
  PIE = 'pie',
  DOUGHNUT = 'doughnut',
}

export enum EColors {
  BLUE = 'blue',
  ORANGE = 'orange',
  GREEN = 'green',
  PURPLE = 'purple',
}

export const CIRCLE_DEFAULT: IParametersChartPizza = {
  labels: [],
  data: [],
  type: ETypes.POLARAREA,
};

export const REGULAR_DEFAULT: IParametersChart = {
  labels: [],
  data: [],
  type: ETypes.LINE,
  indexAxis: 'x',
  color: EColors.BLUE,
};

export const EBlueRGB = [
  {
    border: 'rgb(54, 162, 235)',
    background: 'rgb(54, 162, 235, 0.2)',
  },
  {
    border: 'rgb(255, 159, 64)',
    background: 'rgb(255, 159, 64, 0.2)',
  },
  {
    border: 'rgb(75, 192, 192)',
    background: 'rgb(75, 192, 192, 0.2)',
  },
  {
    border: 'rgb(153, 102, 255)',
    background: 'rgb(153, 102, 255, 0.2)',
  },
];

export const ColorsRBG = {
  [EColors.BLUE]: EBlueRGB[0],
  [EColors.ORANGE]: EBlueRGB[1],
  [EColors.GREEN]: EBlueRGB[2],
  [EColors.PURPLE]: EBlueRGB[3],
};

export const TEXTCOLORSECONDARY = '--text-color-secondary';
export const SURFACEBORDER = '--surface-border';
