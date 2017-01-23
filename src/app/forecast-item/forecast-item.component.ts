import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css']
})
export class ForecastItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {}

}
