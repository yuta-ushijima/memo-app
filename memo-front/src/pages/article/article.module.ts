import { IonicModule } from "ionic-angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Apollo } from 'apollo-angular';

import { ArticleListingPage } from "./article-listing/article-listing.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    Apollo
  ],
  providers: [
  ],
  declarations: [
    ArticleListingPage
  ]
})

export class ArticleModule {}
