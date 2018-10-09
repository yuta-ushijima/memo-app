/* 内部モジュールのインポート */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/* 外部モジュールのインポート */
import { HttpClientModule } from '@angular/common/http';
import { ApolloBoost, ApolloBoostModule } from "apollo-angular-boost";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import  { InMemoryCache } from "apollo-cache-inmemory";
import { InAppBrowser } from "@ionic-native/in-app-browser";

/* コンポーネントのインポート */
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ArticleListPage } from "../pages/article/article-list/article-list";
import { ArticleDetailPage } from "../pages/article/article-detail/article-detail";
import { ArticleCreatePage } from "../pages/article/article-create/article-create";
import { ArticleEditPage } from "../pages/article/article-edit/article-edit";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastService } from "../pages/shared/service/toast_service";
import { LoaderService } from "../pages/shared/service/loader.service";
import { NewsPage } from "../pages/news/news";
import {NewsService} from "../pages/shared/service/news.service";

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    ArticleListPage,
    ArticleDetailPage,
    ArticleCreatePage,
    ArticleEditPage,
    NewsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloBoostModule,
    HttpLinkModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    ArticleListPage,
    ArticleDetailPage,
    ArticleCreatePage,
    ArticleEditPage,
    NewsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToastService,
    LoaderService,
    NewsService,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

  private backend_server = "http://localhost:3000/graphql";

  constructor(apollo: ApolloBoost) {
    apollo.create({
      uri: this.backend_server,
      httpOptions: {
        withCredentials: false
      },
      onError: ({ graphQLErrors, networkError, operation, forward }) => {
        if (graphQLErrors) {
          console.log(graphQLErrors);
        }
        if (networkError) {
          console.log(networkError);
        }
        // return forward(operation);
      }
    });
  }
}
