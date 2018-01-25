import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  /*
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
*/
  public lista_filmes = Array<any>();
  public page = 1;
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
    ) {}

  public somaDoisNumeros(num1:number, num2:number): void{
    alert(num1 + num2);
  }

  ionViewDidEnter() {
   this.carregarFilmes();
  }
  carregarFilmes(){
    console.log('FeedPage Iniciada\n');
    //this.somaDoisNumeros(10,2);
    this.presentLoading();
    this.movieProvider.getLatesMovies().subscribe(
      data=>{//Sucesso

        const response = (data as any);// Transforma em qualquer coisa sem tipo
        const objeto_retorno = JSON.parse(response._body);// Converte pra JSON
        this.lista_filmes = objeto_retorno.results;//Results
        console.log(objeto_retorno);
        this.closeLoading();
        if(this.isRefreshing){
          this.isRefreshing = false;
          this.refresher.complete();
        }

      }, error =>{//Erro
        this.closeLoading();//Fechar dialogo
        if(this.isRefreshing){
          this.isRefreshing = false;
          this.refresher.complete();
        }
        console.log(error);
      }
    );
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
        });
      this.loader.present();
  }
 closeLoading() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    console.log('Begin async operation', refresher);
    this.carregarFilmes();
  }

  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, {id: filme.id});
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  
}
