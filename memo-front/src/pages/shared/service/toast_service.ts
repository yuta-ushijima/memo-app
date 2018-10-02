import { Injectable } from "@angular/core";
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

  constructor(public toastCtrl: ToastController) { }

  presentSuccessfulToast(message: string) {
    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'top',
      cssClass: 'toast-successful'
    });
    toast.present();
  }

  presentErrorToast(message: string) {
    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'top',
      cssClass: 'toast-error'
    });
    toast.present();
  }

}
