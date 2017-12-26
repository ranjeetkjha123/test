import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { ColorService } from '@ux-aspects/ux-aspects';
import {UserComponent} from "../user/user.component";
import {Loginservice} from '../loginservice';
import { Chart } from 'chart.js';
import { ChartsModule,BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
providers: [Loginservice]
})
export class DashboardComponent implements AfterViewInit {
	
  @ViewChild(BaseChartDirective) baseChart: BaseChartDirective;

  ngOnInit() {
    this._service.checkCredentials();
    
  }
  
  // configure the directive data
    barChartData: Chart.ChartDataSets[] = [{
        data: [34, 25, 19, 34, 32, 44, 50, 67],
        borderWidth: 1
    }];

    barChartLabels: string[] = ['.doc', '.ppt', '.pdf', '.xls', '.html', '.txt', '.csv', '.mht'];
    barChartOptions: Chart.ChartOptions;
    barChartLegend: boolean = false;
    barChartColors: any;

  // configure the directive data
    lineChartData: Chart.ChartDataSets[] = [{
        data: [34, 25, 19, 34, 32, 44],
        borderWidth: 1
    },
    {
        data: [, , , , , 44, 45, 50, 55],
        borderDash: [5],
        borderWidth: 1
    }];

    lineChartLabels: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    lineChartOptions: Chart.ChartOptions;
    lineChartLegend: boolean = false;
    lineChartColors: any;
	
	// configure the directive data
    donutChartData: Chart.ChartDataSets[] = [{
        data: [25, 15, 18, 20, 10],
        borderWidth: 0
    }];

    donutChartLabels: string[] = ['Sales 1', 'Sales 2', 'Sales 3', 'Sales 4', 'Sales 5'];
    donutChartOptions: Chart.ChartOptions;
    donutChartLegend: boolean = true;
    donutChartColors: any;

    constructor(colorService: ColorService,private _service:Loginservice) {
		
		// Prepare colors used in chart
        let borderColor = colorService.getColor('grey2').setAlpha(0.5).toRgba();
        let barBackgroundColor = colorService.getColor('chart1').setAlpha(0.1).toRgba();
        let barHoverBackgroundColor = colorService.getColor('chart1').setAlpha(0.2).toRgba();
        let barBorderColor = colorService.getColor('chart1').toHex();
        



        let tooltipBackgroundColor = colorService.getColor('grey2').toHex();
        let gridBorderColor = colorService.getColor('grey4').toHex();
        let gridColor = colorService.getColor('grey6').toHex();
        let lineBorderColor = colorService.getColor('chart1').toRgb();
        let lineFillColor = colorService.getColor('chart1').setAlpha(0.1).toRgba();
        let lineForecastFillColor = colorService.getColor('chart1').setAlpha(0.06).toRgba();
        let pointBorderColor = colorService.getColor('chart1').setAlpha(0.5).toRgba();

        this.lineChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            elements: {
                line: {
                    tension: 0
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: gridColor
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    } as Chart.LinearTickOptions,
                    gridLines: {
                        color: gridColor
                    }
                }]
            },
            tooltips: {
                backgroundColor: tooltipBackgroundColor,
                cornerRadius: 0,
                callbacks: {
                    title: (item: Chart.ChartTooltipItem[]) => {
                        return;
                    },
                    label: (item: Chart.ChartTooltipItem) => {
                        return `x: ${item.xLabel}, y: ${item.yLabel}`;
                    }
                },
                displayColors: false
            } as any
        };

        this.lineChartColors = [
            {
                borderColor: lineBorderColor,
                backgroundColor: lineFillColor,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBorderColor: pointBorderColor,
                pointHoverBorderWidth: 3,
                pointHoverRadius: 5,
                pointHitRadius: 5
            },
            {
                borderColor: lineBorderColor,
                backgroundColor: lineForecastFillColor,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'transparent',
                pointHoverBorderColor: pointBorderColor,
                pointHoverBorderWidth: 3,
                pointHoverRadius: 5,
                pointHitRadius: 5
            }
        ];
    
  

    

        

        this.donutChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            cutoutPercentage: 70,
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 12
                }
            },
            tooltips: {
                callbacks: {
                    title: (item: Chart.ChartTooltipItem[]) => {
                        return;
                    },
                    label: (item: Chart.ChartTooltipItem, data: any) => {

                        // get the dataset (we only have one)
                        let dataset = data.datasets[0];

                        // calculate the total of all segment values
                        let total = dataset.data.reduce((previousValue: any, currentValue: any) => {
                            return previousValue + currentValue;
                        });

                        // get the value of the current segment
                        let segmentValue = dataset.data[item.index];

                        // calculate the percentage of the current segment compared to the total
                        let precentage = Math.round(((segmentValue / total) * 100));

                        return `${ precentage }%, Sales ${ item.index + 1 }`;
                    }
                },
                backgroundColor: tooltipBackgroundColor,
                cornerRadius: 0,
                displayColors: false
            } as any
        };

        this.donutChartColors = [
            {
                backgroundColor: [
                    colorService.getColor('chart1').toRgb(),
                    colorService.getColor('chart2').toRgb(),
                    colorService.getColor('chart3').toRgb(),
                    colorService.getColor('chart4').toRgb(),
                    colorService.getColor('chart5').toRgb()
                ],
                hoverBackgroundColor: [
                    colorService.getColor('chart1').setAlpha(0.3).toRgba(),
                    colorService.getColor('chart2').setAlpha(0.3).toRgba(),
                    colorService.getColor('chart3').setAlpha(0.3).toRgba(),
                    colorService.getColor('chart4').setAlpha(0.3).toRgba(),
                    colorService.getColor('chart5').setAlpha(0.3).toRgba()
                ]
            }
        ];
		
		this.barChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                xAxes: [{
                    barPercentage: 0.5,
                    categoryPercentage: 1,
                    gridLines: {
                        display: true,
                        zeroLineColor: borderColor,
                        color: 'transparent'
                    }
                }],
                yAxes: [{
                    type: 'linear',
                    gridLines: {
                        zeroLineColor: borderColor
                    },
                    ticks: {
                        min: 0,
                        max: 80,
                        stepSize: 20
                    } as Chart.LinearTickOptions
                }]
            },
            tooltips: {
                backgroundColor: tooltipBackgroundColor,
                cornerRadius: 0,
                callbacks: {
                    title: (item: Chart.ChartTooltipItem[]) => {
                        return;
                    },
                    label: (item: Chart.ChartTooltipItem) => {
                        return `x: ${ item.xLabel }, y: ${ item.yLabel }`;
                    }
                },
                displayColors: false
            } as any
        };

        this.barChartColors = [
            {
                backgroundColor: barBackgroundColor,
                hoverBackgroundColor: barHoverBackgroundColor,
                borderColor: barBorderColor
            }
        ];

    }

    ngAfterViewInit() {

        // get instance of the chart
        let chartInstance = this.baseChart.chart;

        // create reference to Chart with type of any
        let chartJs = Chart as any;

        // Added dashed borders to forecast data
        chartJs.helpers.each(chartInstance.getDatasetMeta(0).data, (bar: any, index: number) => {

            // only alter the bars that are forecast data
            if (index >= 6) {
                bar.draw = function () {
                    chartInstance.chart.ctx.save();
                    chartInstance.chart.ctx.setLineDash([2, 2]);
                    chartJs.elements.Rectangle.prototype.draw.apply(this, arguments);
                    chartInstance.chart.ctx.restore();
                };
            }
        });
    }

}
    
	

