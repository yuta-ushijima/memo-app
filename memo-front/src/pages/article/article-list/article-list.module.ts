import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleListPage } from './article-list';

@NgModule({
  declarations: [
    ArticleListPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleListPage),
  ],
})
export class ArticleListPageModule {}
