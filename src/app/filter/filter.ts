import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  allFilter: number = 0;
  ComputersFilter: number = 0;
  AccessoriesFilter: number = 0;
  AudioFilter: number = 0;
  DisplaysFilter: number = 0;
}
