import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('Iniciando Provider: MovieProvider');
  }

  getLatesMovies(page = 1){
    //console.clear();
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.getApiKey() + `&language=pt-BR`);
  }

  getMovieDetails(filme_id){
    //console.clear();
    return this.http.get(this.baseApiPath + `/movie/${filme_id}?api_key=` + this.getApiKey() + `&language=pt-BR`);
  }

  getApiKey(): string{
    let API_KEY:string = "529a470d8eefa52c7a762ad9a65ee7a4";
    return API_KEY;
  }

}
