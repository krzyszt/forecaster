import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TypeaheadModule } from 'ng2-bootstrap';
import { CityLocatorComponent } from './city-locator/city-locator.component';
import { ForecastService } from "./forecast.service";
import { CityListService } from "./city-list.service";
import { ForecastItemComponent } from './forecast-item/forecast-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CityLocatorComponent,
    ForecastItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TypeaheadModule.forRoot()
  ],
  providers: [
    ForecastService,
    CityListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
