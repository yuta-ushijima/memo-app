import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import  gql from 'graphql-tag';
import {ArticleListPage} from "../article-list/article-list";
import { ToastService } from "../../shared/service/toast_service";

/*queryの取得*/
const getArticle = gql`
  query getArticle($id: ID!) {
    article(id: $id) {
      id
      title
      body
    }
  }`;

/*mutationの作成*/
//更新のmutation
const updateArticle = gql`
mutation updateArticle($id: ID!, $title: String!, $body: String!) {
    updateArticle(id: $id, title: $title, body: $body) {
      article {
        id
        title
        body
        userId
      }
    }
  }`;

@IonicPage()
@Component({
  selector: 'page-article-edit',
  templateUrl: 'article-edit.html',
})
export class ArticleEditPage {

  /*プロパティの定義*/
  id: number = this.navParams.get('articleId');
  /*テンプレートでエラーが起きないようにするため、any型を指定*/
  article: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public apollo: Apollo,
              public toaster: ToastService) {
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

  async updateArticle(formValues) {
    await this.apollo.mutate({
      mutation: updateArticle,
      variables: {
        id: parseInt(formValues.id, 10),
        title: formValues.title,
        body: formValues.body,
    },
      updateQueries: {
        article: ({ mutationResult }) => {
          return mutationResult.data.updateArticle;
        }
      }
    }).subscribe(
      (result) => {
        console.log("更新成功: ", result);
        this.navCtrl.push(ArticleListPage);
        this.toaster.presentSuccessfulToast("記事を更新しました！")
      },
      (error) => {
        console.log("更新失敗:", error);
        this.toaster.presentErrorToast("記事を更新できませんでした...。")
      }
    )
  }

}
