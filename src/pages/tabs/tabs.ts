import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { AtletasPage } from '../atletas/atletas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedPage;
  tab5Root = ConfiguracoesPage;
  tab6Root = AtletasPage;


  constructor() {

  }
}
