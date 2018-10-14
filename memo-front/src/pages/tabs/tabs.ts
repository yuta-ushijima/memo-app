import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ArticleListPage } from "../article/article-list/article-list";
import {NewsPage} from "../news/news";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewsPage;
  tab3Root = ArticleListPage;

  constructor() {

  }
}
