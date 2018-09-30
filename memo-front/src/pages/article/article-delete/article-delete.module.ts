import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleDeletePage } from './article-delete';

@NgModule({
  declarations: [
    ArticleDeletePage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleDeletePage),
  ],
})
export class ArticleDeletePageModule {}
