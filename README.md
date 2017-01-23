# Forecaster

Angular 2 SPA displaying the 5 day weather forecast for a location of your choice. 
This project was generated with [angular-cli](https://github.com/angular/angular-cli).
[ng2-bootstrap](http://valor-software.com/ng2-bootstrap) was used for styling.
[openweathermap](http://openweathermap.org/forecast5) API was used to retrieve the current 5 day weather forecast.

## Demo

Online demo (deployed as a docker image with Docker Cloud to AWS) is available here NOT COMPLETED YET

# Installation

- Using npm 

Run the foillowing commands:

    npm install -g angular-cli
    npm install

Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
    
- Using Docker
  NOT COMPLETED
  
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Extras
Use the CityLocator typeahead component to select a custom town or region and make async calls to retrieve the 5-day weather forecast for that location.
Available locations are limited  to a short and hardcoded list of cities/regions.
CityList service retrives the OpenWeather city list (more than 200k items). It is not fully implemented and not integrated with the CityLocator component.  

## What Could be done with more time

 - CityLocator typeahead component 
   A bit of tweaking is required to synchronise the component with CityList service to get it responsive. 

 - Proper Testing. 
 As it was not BDD exercise it was just writing simple features. All .spec test files were generated with ng cli and some would fail after components modifications.
 
 - Docker Image, CI & CD with Docker Cloud & AWS
 I have not completed setting CI & CD with Docker, Docker Cloud & AWS as I used 4 hrs time slot.
 
 
