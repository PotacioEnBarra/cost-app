import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

@Input() label: string ="";
@Input() total: string = "";
@Input() percentage: string="";

  Highcharts = Highcharts;
  chartOptions = {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60
      },
      title: {
        align: 'left',
        text: null
      },
      subtitle: {
        align: 'left',
        text: null
      },
      exporting: {
        enabled: false
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: null,
        labels:{
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: null
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [
        {
          name: 'Browsers',
          colorByPoint: true,
          data: [
            71
          ]
        }
      ],
      drilldown: {
        breadcrumbs: {
          position: {
            align: 'right'
          }
        },
        series: [
          {
            name: 'Chrome',
            id: 'Chrome',
            data: [
              [
                'v65.0',
                0.1
              ],
              [
                'v64.0',
                1.3
              ],
              [
                'v63.0',
                53.02
              ],
              [
                'v62.0',
                1.4
              ],
              [
                'v61.0',
                0.88
              ],
              [
                'v60.0',
                0.56
              ],
              [
                'v59.0',
                0.45
              ],
              [
                'v58.0',
                0.49
              ],
              [
                'v57.0',
                0.32
              ],
              [
                'v56.0',
                0.29
              ],
              [
                'v55.0',
                0.79
              ],
              [
                'v54.0',
                0.18
              ],
              [
                'v51.0',
                0.13
              ],
              [
                'v49.0',
                2.16
              ],
              [
                'v48.0',
                0.13
              ],
              [
                'v47.0',
                0.11
              ],
              [
                'v43.0',
                0.17
              ],
              [
                'v29.0',
                0.26
              ]
            ]
          },
          {
            name: 'Firefox',
            id: 'Firefox',
            data: [
              [
                'v58.0',
                1.02
              ],
              [
                'v57.0',
                7.36
              ],
              [
                'v56.0',
                0.35
              ],
              [
                'v55.0',
                0.11
              ],
              [
                'v54.0',
                0.1
              ],
              [
                'v52.0',
                0.95
              ],
              [
                'v51.0',
                0.15
              ],
              [
                'v50.0',
                0.1
              ],
              [
                'v48.0',
                0.31
              ],
              [
                'v47.0',
                0.12
              ]
            ]
          },
          {
            name: 'Internet Explorer',
            id: 'Internet Explorer',
            data: [
              [
                'v11.0',
                6.2
              ],
              [
                'v10.0',
                0.29
              ],
              [
                'v9.0',
                0.27
              ],
              [
                'v8.0',
                0.47
              ]
            ]
          },
          {
            name: 'Safari',
            id: 'Safari',
            data: [
              [
                'v11.0',
                3.39
              ],
              [
                'v10.1',
                0.96
              ],
              [
                'v10.0',
                0.36
              ],
              [
                'v9.1',
                0.54
              ],
              [
                'v9.0',
                0.13
              ],
              [
                'v5.1',
                0.2
              ]
            ]
          },
          {
            name: 'Edge',
            id: 'Edge',
            data: [
              [
                'v16',
                2.6
              ],
              [
                'v15',
                0.92
              ],
              [
                'v14',
                0.4
              ],
              [
                'v13',
                0.1
              ]
            ]
          },
          {
            name: 'Opera',
            id: 'Opera',
            data: [
              [
                'v50.0',
                0.96
              ],
              [
                'v49.0',
                0.82
              ],
              [
                'v12.1',
                0.14
              ]
            ]
          }
        ]
      }
    }
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
