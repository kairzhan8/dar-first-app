import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from '../components/cities/cities.component';
import { CityprefixPipe } from '../cityprefix.pipe';

@NgModule({
  declarations: [
    CitiesComponent,
    CityprefixPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CitiesComponent
  ]
})
export class CitiesModule { }
