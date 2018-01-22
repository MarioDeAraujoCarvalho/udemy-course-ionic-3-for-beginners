import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Mário Carvalho",
    img_avatar_link: "http://www.synckware.com/mario-carvalho/images/avatar.png",
    data: "November 5, 1955",
    img_comment_link: "https://cdn-enterprise.discourse.org/ionicframework/uploads/default/original/3X/5/9/59963d686139d1fcb1fb2385ec12883b7d9d97a2.jpg",
    descricao: "Eu me tornei aquilo que jurei destruir... #TeamIonic",
    quant_likes: 12,
    quant_comments: 4,
    time_comment: "11h ago"
  }
  public nome_usuario:string = "Mário Carvalho";//Apenas string
  public nome_usuario_2:string = "Camilo Carromeu";//Apenas string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(10,2);
  }

}
