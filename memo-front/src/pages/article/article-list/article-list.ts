import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import  gql from 'graphql-tag';
import {ArticleDetailPage} from "../article-detail/article-detail";

// クエリの定義
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
  articles = [];

  constructor(public apollo: Apollo,
              public navCtrl: NavController) {
  }

  // 詳細ページへの遷移
  details(articleId: number) {
    this.navCtrl.push(ArticleDetailPage, { articleId: articleId});
  }

  async ngOnInit() {
    await this.loadData();
  }
  /*usersの読み込み*/
  async loadData() {
    await this.apollo.query({
      query: Articles,
    }).subscribe(
      (result) => {
        console.log(result);
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
