import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Will Home';

  keyword = 'Angular 14';

  data: Article[] = [];

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Article[]>('/api/articles.json').subscribe((data) => {
      this.data = data;
      // console.log(data);
    });
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




