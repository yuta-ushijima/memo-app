import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import  gql from 'graphql-tag';

// コンポーネントのインポート
import { ArticleListPage } from "../article-list/article-list";
import {ArticleEditPage} from "../article-edit/article-edit";

import { LoaderService } from "../../shared/service/loader.service";

// queryの定義
const getArticle = gql`
  query getArticle($id: ID!) {
    article(id: $id) {
      id
      title
      body
    }
  }`;

// mutationの作成
//削除のmutation
const deleteArticle = gql`
  mutation deleteArticle($id: ID!) {
    deleteArticle(id: $id) {
      article {
        id
      }
    }
  }`;

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
              public navParams: NavParams,
              public navCtrl: NavController,
              public loaderService: LoaderService) {
  }

  // 編集ページへの遷移
  editArticle(articleId: number) {
    this.navCtrl.push(ArticleEditPage, { articleId: articleId });
  }

  // 削除ボタン実行処理
  deleteArticle(articleId: number) {
    this.deleteArticleAction(articleId)
  }

  async ngOnInit() {
    this.loaderService.presentLoading();
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

  // 削除処理
  async deleteArticleAction(id: number) {
    await this.apollo.mutate({
      mutation: deleteArticle,
      variables: {
        id: id
      }
    }).subscribe(
      (result) => {
        console.log("削除成功:", result);
        this.navCtrl.push(ArticleListPage)
      },
      (error) => {
        console.log("削除失敗:", error)
      }
    )
  }

}
