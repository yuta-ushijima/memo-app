import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular";

@Injectable()

export class  LoaderService {

  constructor(private loadingCtrl: LoadingController) {}

  public async presentLoading() {
    let loader = await this.loadingCtrl.create({
      spinner: 'hide',
      content: "読み込み中・・・。"
    });

    loader.present();

    /* 3秒後にローディングを解除 */
    setTimeout(() => {
      loader.dismiss();
    }, 3000)
  }
}
