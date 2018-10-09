import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

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
    const signupModal = this.modalCtrl.create("");
    signupModal.present();
  }

  /* For Login */
  presentLoginModal() {
    const signupModal = this.modalCtrl.create("");
    signupModal.present()
  }

}
