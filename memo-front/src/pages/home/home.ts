import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SignupPage} from "../signup/signup";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // 最終的にはスライドにする
  slideList = [
    {
      'image': "https://source.unsplash.com/category/office/"
    }
  ];

  constructor(public modalCtrl: ModalController) {}

  /* For Signup*/
  presentSignupModal() {
    const signupModal = this.modalCtrl.create(SignupPage);
    signupModal.present();
  }

  /* For Login */
  presentLoginModal() {
    const loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present()
  }

}
