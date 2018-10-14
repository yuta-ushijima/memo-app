import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import  gql from 'graphql-tag';
import {ArticleListPage} from "../article-list/article-list";
import { ToastService } from "../../shared/service/toast_service";

/* Mutationの定義 */
const createArticle = gql`
  mutation createArticle($title: String!, $body: String!, $user_id: ID!) {
    createArticle(title: $title, body: $body, userId: $user_id) {
      article {
        title
        body
        userId
      }
    }
  }
`;

@IonicPage()
@Component({
  selector: 'page-article-create',
  templateUrl: 'article-create.html',
})
export class ArticleCreatePage {

  /*プロパティの定義
  * テンプレートでエラーが起きないようにするため、any型を指定 */
  article: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public apollo: Apollo,
              public toaster: ToastService) {
  }

  ngOnInit() {}

  /*フォームから入力された値を取得し、mutationをサーバーに投げる*/
  async createArticle(formValues) {
    await this.apollo.mutate({
      mutation: createArticle,
      variables: {
        /*mutationするparamsの定義*/
        title: formValues.title,
        body: formValues.body,
        user_id: parseInt(formValues.user_id, 10)
      },
      /*mutationの処理*/
      updateQueries: {
        article: ({ mutationResult }) => {
          return mutationResult.data.createArticle;
        }
      }
    }).subscribe(
      (result) => {
        console.log("登録成功:", result);
        // 一覧ページへの遷移
        this.navCtrl.push(ArticleListPage);
        this.toaster.presentSuccessfulToast("記事を投稿しました！")
      },
      (error) => {
        console.log("登録失敗:", error);
        this.toaster.presentErrorToast("記事を投稿できませんでした...。")
      }
     );
  }
}
