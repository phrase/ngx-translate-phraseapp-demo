import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Highcharts: typeof Highcharts;
  chartOptions: Highcharts.Options;
  updateFlag: boolean;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');

    this.Highcharts = Highcharts;
    this.chartOptions = {
      series: [{
        data: [1, 2, 3],
        type: 'line'
      }],
      title: {
        text: ''
      }
    };

    translate.get("sometest").subscribe((res) => {
      this.chartOptions.title.text = res;
      this.updateFlag = true;
    })
  }
}


