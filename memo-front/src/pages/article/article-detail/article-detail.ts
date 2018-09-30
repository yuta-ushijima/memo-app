import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import  gql from 'graphql-tag';

// クエリの定義
const getArticle = gql`
  query getArticle($id: ID!) {
    article(id: $id) {
      id
      title
      body
    }
  }`;
/**
 * Generated class for the ArticleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * article(id: $id) {
      id
      title
      body
    }
 *
 */

@IonicPage()
@Component({
  selector: 'page-article-detail',
  templateUrl: 'article-detail.html',
})
export class ArticleDetailPage {

  /*プロパティの定義*/
  id: number = this.navParams.get('articleId');
  /*テンプレートでエラーが起きないようにするため、any型を指定*/
  article: any = {};

  constructor(public apollo: Apollo,
              public navParams: NavParams) {
  }

  async ngOnInit() {
    await this.loadData()
  }

  /*記事情報の読み込み*/
  async loadData() {
    await this.apollo.query({
      query: getArticle,
      variables: {
        id: this.id
      },
    }).subscribe(
      (result) => {
        console.log(result);
        this.article = result.data['article'];
      },
      (error) => {
        console.log(this.id);
        console.log("Error is", error);
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
        // console.log("onCompleted");
      }
    );
  }

}
