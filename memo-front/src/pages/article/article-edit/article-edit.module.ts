import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleEditPage } from './article-edit';

@NgModule({
  declarations: [
    ArticleEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleEditPage),
  ],
})
export class ArticleEditPageModule {}
