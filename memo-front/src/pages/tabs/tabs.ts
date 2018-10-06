import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ArticleListPage } from "../article/article-list/article-list";
import {NewsPage} from "../news/news";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = NewsPage;
  tab4Root = ArticleListPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
