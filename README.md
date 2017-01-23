# Forecaster

Angular 2 SPA displaying the 5 day weather forecast for a location of your choice. 
This project was generated with [angular-cli](https://github.com/angular/angular-cli).
[ng2-bootstrap](http://valor-software.com/ng2-bootstrap) was used for styling.
[openweathermap](http://openweathermap.org/forecast5) API was used to retrieve the current 5 day weather forecast.

## Demo

Online demo (deployed as a docker image with Docker Cloud to AWS) is available here [forecaster-demo](https://github.com/angular/angular-cli)

# Installation

- Using npm 

Run the foillowing commands:

    npm install -g angular-cli
    npm install

Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
    
- Using Docker
Run `docker up` to build and run application.
   
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Extras
The CityLocator typeahead component allows to retrive the 5-day weather forecast for a custom location (picked up from a hardcoded and short list of cities/regions).
CityList service retrives the OpenWeather city list (more than 200k items). Although it was not fully implemented and integrated with CityLocator component.  

## What Could be done with more time

 - CityLocator typeahead component 
   A bit of tweaking is required to syncronise it with CityList service to get it responsive. 

 - Proper Testing. 
 As it was not BDD exercise it was just writing simple features. All .spec test files were generated with ng cli and some would fail after components modifications.
 
 
 
