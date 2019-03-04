import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities: Array<{name: string, type: string}> = [
    {name: 'Almaty', type: 'city' },
    {name: 'Akbulak', type: 'village'},
    {name: 'Astana', type: 'city'},
    {name: 'London', type: 'city'},
    {name: 'Aksay', type: 'village'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
