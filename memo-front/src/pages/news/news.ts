import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NewsService} from "../shared/service/news.service";

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage implements OnInit {

  news: any;

  constructor(public newsService: NewsService) {
  }

 ngOnInit() {
    this.newsService.getData('top-headlines?country=jp&category=technology&').subscribe(data => {
      this.news = data;
      console.log(data);
    })
 }
}
