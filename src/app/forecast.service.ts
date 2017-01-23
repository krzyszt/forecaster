import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const API_KEY = "93cb320ce656e02b4d1427e1a83e9d0f";

@Injectable()
export class ForecastService {
  constructor(private http:Http) {}

  private weatherApiUrl = 'http://api.openweathermap.org/data/2.5/forecast';

  getForecasts(city: string) {

    let url = this.weatherApiUrl + '?q=' + city + '&appid=' + API_KEY;

    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
