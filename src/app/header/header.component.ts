import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input()
  siteinfo = {
    sitename: 'Angular 14',
    subtitle: 'One framework. Mobile & desktop.',
  };

  @Output()
  titleChanged = new EventEmitter<string>();

  counter = 0;

  constructor() {
    console.log('constructor', this.siteinfo);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchange', changes['siteinfo']);
  }

  // 一個 callback 方法，在預設的變更檢測器首次檢查 Directive 的資料繫結屬性之後立即執行，
  // 並且在檢查任何 View 或 Content Child 之前。它只在 Directive 實例化時執行一次。
  ngOnInit() {
    this.siteinfo.sitename = 'Hello World';
    console.log('oninit', this.siteinfo);
  }

  changeTitle(newTitle: string) {
    this.titleChanged.emit(newTitle);

    this.counter++;
  }
}
