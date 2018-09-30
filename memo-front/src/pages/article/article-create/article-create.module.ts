import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleCreatePage } from './article-create';

@NgModule({
  declarations: [
    ArticleCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleCreatePage),
  ],
})
export class ArticleCreatePageModule {}
