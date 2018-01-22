import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  
    doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Nova Corrida',
      message: 'Você realmente deseja adicionar uma nova corrida?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Adicionar',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
