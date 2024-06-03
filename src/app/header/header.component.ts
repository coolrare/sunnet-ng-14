import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  sitename = 'Hello World';

  @Output()
  titleChanged = new EventEmitter<string>();

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string) {
    this.titleChanged.emit(newTitle);

    this.counter++;
  }

}
