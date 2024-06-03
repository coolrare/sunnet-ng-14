import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { Observable, of, shareReplay, subscribeOn } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  siteinfo = {
    sitename: 'Angular 14',
    subtitle: 'One framework. Mobile & desktop.',
  };

  keyword = 'Angular 14';

  data$: Observable<Article[]> = of([]);

  constructor(private cdr: ChangeDetectorRef, private datasvc: DataService) {
  }

  ngOnInit() {
    this.data$ = this.datasvc.getArticles().pipe(shareReplay(1));
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

  changeName(name: string) {
    this.siteinfo = { ...this.siteinfo, sitename: name };
  }

}




