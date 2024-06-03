import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { Observable, debounceTime, of, shareReplay, subscribeOn } from 'rxjs';
import { DataService } from './data.service';
import { ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

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

  @ViewChild('mKeyword', { static: true })
  mKeyword!: ElementRef;

  constructor(private cdr: ChangeDetectorRef, private datasvc: DataService) {
  }

  ngOnInit() {
    this.data$ = this.datasvc.getArticles().pipe(shareReplay(1));

    fromEvent<KeyboardEvent>(this.mKeyword.nativeElement, 'keyup')
      .pipe(debounceTime(500))
      .subscribe((event) => {
        const keyword = (event.target as HTMLInputElement).value;
        this.confirmKeyword(keyword);
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

    this.datasvc.getArticles().subscribe(data => {
      this.data$ = of(data.filter(article => article.title.includes(newKeyword)));
    });

  }

  changeName(name: string) {
    this.siteinfo = { ...this.siteinfo, sitename: name };
  }

}




