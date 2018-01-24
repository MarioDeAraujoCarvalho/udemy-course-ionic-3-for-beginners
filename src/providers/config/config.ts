import { Injectable } from '@angular/core';
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//Variavel Global
let config_key_name = "config";

@Injectable()
export class ConfigProvider {
  private config = {
    showSlide: false,
    name: "",
    username: ""
  }
  constructor() {
  }

  //Recuperar os dados de configuração
  getConfigData(): any{
    return localStorage.getItem(config_key_name);
  }
  //Gravar dados
  setConfigData(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: "",
      username: ""
    }
    if(showSlide){
      this.config.showSlide = showSlide;
    }

    if(name){
      this.config.name = name;
    }

    if(username){
      this.config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(this.config));
  }

}
