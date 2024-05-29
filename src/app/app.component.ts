import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  keyword = 'Angular 14';

  sitename = 'Hello World';

  counter = 0;

  constructor(private cdr: ChangeDetectorRef) {
  }

  changeTitle(newTitle: string) {
    this.sitename = newTitle;
    this.counter++;
  }

  clearKeyword() {
    this.keyword = '1';
    this.cdr.detectChanges();

    this.keyword = '';
    this.cdr.detectChanges();
  }

  confirmKeyword(newKeyword: string) {
    this.keyword = newKeyword;
  }

}
