import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {NewsPage} from "../news/news";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }


  /*ニュースページへの遷移*/
  jumpNewsPage() {
    this.navCtrl.push(NewsPage);
  }

  /*閉じるボタン*/
  dismissButton() {
    this.viewCtrl.dismiss();
  }

}
