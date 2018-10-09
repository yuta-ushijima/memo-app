import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsService } from "../shared/service/news.service";
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import {ArticleCreatePage} from "../article/article-create/article-create";
import {LoaderService} from "../shared/service/loader.service";

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
  /* プロパティの定義*/
  news: any;
  url: string;

  constructor(public newsService: NewsService,
              private inAppBrowser: InAppBrowser,
              private navCtrl: NavController,
              public loadService: LoaderService) {
  }

 ngOnInit() {
   this.loadService.presentLoading();
    this.newsService.getData('top-headlines?country=jp&category=technology&').subscribe(data => {
      this.news = data;
      console.log(data);
    })
 }

  // 新規作成ページへの遷移
  postArticle() {
    this.navCtrl.push(ArticleCreatePage);
  }

 openWebpage(url: string) {

    const options: InAppBrowserOptions = {
      location: "yes",
      toolbar : 'yes'
    }

    /*urlを開く*/
    this.inAppBrowser.create(url, '_system', options);
 }
}
