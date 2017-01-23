import { Component, OnInit } from '@angular/core';
import {ForecastService} from "./forecast.service";
import * as moment from "moment";
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  homeCity: string = 'London';
  forecasts;
  loaded: boolean = false;
  dayList;
  days: any[];

  constructor(private forecastService: ForecastService) {
  }

  ngOnInit() {
    this.refresh(this.homeCity);
  }

  refresh(city: string) {
    this.loaded = false;
    this.homeCity = city;
    this.dayList = [];
    this.days = [[],[], [],[],[],[]];

    this.forecastService.getForecasts(city).subscribe(
      (forecasts) => {
        _.forEach(forecasts.list, (item) => {

          let dayName = moment.unix(item.dt).format('dd');
          if (this.dayList.indexOf(dayName) == -1) {
            this.dayList.push(dayName);
          }
          let dayIndex = this.dayList.indexOf(dayName);

          this.days[dayIndex].push(item);
        });

        if (this.days[5].length === 0) {
          this.days.splice(5,1);
        }

        this.loaded = true;
      },
      err => console.log(err)
    )
  }

  selectCity(event) {
    this.refresh(event);
  }
}
