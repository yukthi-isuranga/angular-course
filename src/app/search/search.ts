import { NgIf, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchValue: string = '';

  changeSerchValue(eventData: Event) {
    console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
}
