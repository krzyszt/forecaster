import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CityListService {
  constructor(private http:Http) {}

  private cityListUrl = './app/city.list.json';

  getCityList() : Observable<Comment[]> {

    return this.http.get(this.cityListUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}

