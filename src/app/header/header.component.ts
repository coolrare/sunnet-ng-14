import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string) {
    this.sitename = newTitle;
    this.counter++;
  }

}
