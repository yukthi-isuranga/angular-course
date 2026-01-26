import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input() allFilter: number = 0;
  @Input() ComputersFilter: number = 0;
  @Input() AccessoriesFilter: number = 0;
  @Input() AudioFilter: number = 0;
  @Input() DisplaysFilter: number = 0;

  selectedFilterIs: string = 'All';

  @Output()
  filterRadioChnageChild: EventEmitter<string> = new EventEmitter<string>();

  filterFunction() {
    this.filterRadioChnageChild.emit(this.selectedFilterIs);
    console.log('.......... ' + this.selectedFilterIs + ' child');
  }
}
