import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input() allFilter: number = 0;
  @Input() ComputersFilter: number = 0;
  @Input() AccessoriesFilter: number = 0;
  @Input() AudioFilter: number = 0;
  @Input() DisplaysFilter: number = 0;
}
