import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Apollo } from 'apollo-angular';
import  gql from 'graphql-tag';
import {NavController} from "ionic-angular";

// クエリの定義
const Users = gql`
  query {
    articles {
      title
      body
    }
  }`;

@Component({
  selector: 'app-article-listing',
  templateUrl: './article/article-listing.page.html'
})

export class ArticleListingPage {

  // プロパティの定義
  users = [];

  constructor(public navCtrl: NavController,
              public apollo: Apollo) {}

  async ngOnInit() {
    await this.loadData();
  }

  /*usersの読み込み*/
  async loadData() {
    await this.apollo.query({
      query: Users,
    }).subscribe(
      (result) => {
        console.log(result);
        this.users = result.data['users']
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
