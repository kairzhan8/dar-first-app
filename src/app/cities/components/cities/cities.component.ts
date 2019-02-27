import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities = ['Almaty', 'Astana', 'Shymkent', 'London', 'Paris', 'Madrid'];

  constructor() { }

  ngOnInit() {
  }

}
