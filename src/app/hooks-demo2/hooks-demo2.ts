import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-hooks-demo2',
  imports: [],
  templateUrl: './hooks-demo2.html',
  styleUrl: './hooks-demo2.css',
})
export class HooksDemo2 {
  @Input() inputText?: string = 'xxx';

  constructor() {
    console.log(this.inputText);
    console.log('constructor called...');
  }

  ngOnInit() {
    console.log('ngOnInit Called.....');
    console.log(this.inputText);
  }

  ngOnChanges(change: SimpleChange) {
    console.log('ngOnChanges called......');
    console.log(change);
  }

  //when ever event hapenns this will call.
  ngDoCheck() {
    console.log('ngDoCheck........');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInIt........');
  }

  ngAfterContentChecked() {
    console.log('ngafterContentChecked........!!!!');
  }

  //only first ditection cycle
  ngAfterViewInit() {
    console.log('ngAfterViewInit........###################');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy........@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
  }
}
