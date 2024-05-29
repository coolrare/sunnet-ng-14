import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sitename = 'Hello World'

  changeTitle(newTitle: string) {
    this.sitename = newTitle
  }

}
