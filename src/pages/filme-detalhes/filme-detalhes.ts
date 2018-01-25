import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [
    MovieProvider
  ]
})
export class FilmeDetalhesPage {
  public filme;
  public filme_id;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public movieProvider: MovieProvider
    ) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad FilmeDetalhesPage');
    this.filme_id = this.navParams.get("id");
    console.log( "Filme ID : " + this.filme_id);

    this.movieProvider.getMovieDetails(this.filme_id).subscribe(
      data =>{
        let retorno = (data as any)._body;
        this.filme = JSON.parse(retorno);
      }, error =>{
        console.log(error);
      }
    )
  }

}
