import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  keyword = 'Angular 14';

  sitename = 'Hello World';

  changeTitle(newTitle: string) {
    this.sitename = newTitle;
  }

  clearKeyword() {
    this.keyword = '';
  }

  confirmKeyword(event: Event) {
    let kev = <KeyboardEvent>event;
    let newKeyword: string = (<HTMLInputElement>event.target).value;
    this.keyword = newKeyword;
  }

}
