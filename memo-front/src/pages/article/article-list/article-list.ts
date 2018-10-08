import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import  gql from 'graphql-tag';
import {ArticleDetailPage} from "../article-detail/article-detail";
import {ArticleCreatePage} from "../article-create/article-create";
import {ArticleEditPage} from "../article-edit/article-edit";

import { LoaderService } from "../../shared/service/loader.service";

// queryの定義
const Articles = gql`
  query {
    articles {
      id
      title
      body
    }
  }`;
/**
 * Generated class for the ArticleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article-list',
  templateUrl: 'article-list.html',
})

export class ArticleListPage {

  // プロパティの定義

  articles: Observable<any>;

  constructor(public apollo: Apollo,
              public navCtrl: NavController,
              public loadService: LoaderService) {
  }

  // 詳細ページへの遷移
  details(articleId: number) {
    this.navCtrl.push(ArticleDetailPage, { articleId: articleId });
  }

  // 編集ページへの遷移
  editArticle(articleId: number) {
    this.navCtrl.push(ArticleEditPage, { articleId: articleId });
  }

  async ngOnInit() {
    this.loadService.presentLoading();
    await this.loadData();
  }
  /*articlesの読み込み*/
  async loadData() {
    await this.apollo.query({
      query: Articles,
    }).subscribe(
      (result) => {
        this.articles = result.data['articles']
      },
      (error) => {
        console.log("errors", error)
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
        // console.log("onCompleted");
      }
    )
  }

}
