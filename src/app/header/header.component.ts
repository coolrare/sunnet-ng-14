import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input()
  sitename = 'Hello World';

  @Output()
  titleChanged = new EventEmitter<string>();

  counter = 0;

  constructor() {
    console.log('constructor', this.sitename);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchange', changes['sitename']);
  }

  // 一個 callback 方法，在預設的變更檢測器首次檢查 Directive 的資料繫結屬性之後立即執行，
  // 並且在檢查任何 View 或 Content Child 之前。它只在 Directive 實例化時執行一次。
  ngOnInit() {
    this.sitename = 'Hello World';
    console.log('oninit', this.sitename);
  }

  changeTitle(newTitle: string) {
    this.titleChanged.emit(newTitle);

    this.counter++;
  }
}
