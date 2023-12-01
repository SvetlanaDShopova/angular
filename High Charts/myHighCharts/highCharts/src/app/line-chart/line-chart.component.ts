import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import {Options } from 'highcharts'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  title = 'line chart';
  highcharts = Highcharts;
    chartOptions = {
      chart: {
        type: "spline"
      },
      title: {
        text: "Monthly Sales Chart Department Wise"
      },
      subtitle: {
        text: "Year 2018"
      },
      xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {
        title: {
          text: "Sales in Million $"
        }
      },
      series: [{
        name: 'Marketing Department',
        data: [49.9, 51.5, 32.0, 82.0, 75.0, 66.0, 32.0, 25.0,
          35.4, 65.1, 58.6, 34.4]
      },
      {
        name: 'Computer Science Department',
        data: [40.5, 34.5, 84.4, 39.2, 23.2, 45.0, 55.6, 18.5,
          26.4, 14.1, 23.6, 84.4]
      }]
    } as Options & { series: (Options['series'] & { data: number[] })[] };
}
