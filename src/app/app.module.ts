import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { HttpModule } from '@angular/http'; 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MovieProvider } from '../providers/movie/movie';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { PerfilPage } from '../pages/perfil/perfil';
import { SobrePage } from '../pages/sobre/sobre';
import { FilmeDetalhesPage } from '../pages/filme-detalhes/filme-detalhes';
import { FilmeDetalhesPageModule } from '../pages/filme-detalhes/filme-detalhes.module';
import { CartolaProvider } from '../providers/cartola/cartola';
import { AtletasPageModule } from '../pages/atletas/atletas.module';
import { AtletasPage } from '../pages/atletas/atletas';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [//Adicionar no modulo para saber que ele existe!
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpModule,
    ConfiguracoesPageModule,
    PerfilPageModule,
    SobrePageModule,
    FilmeDetalhesPageModule,
    AtletasPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [//As novas paginas vao aqui
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConfiguracoesPage,
    PerfilPage,
    SobrePage,
    FilmeDetalhesPage,
    AtletasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    CartolaProvider
  ]
})
export class AppModule {}
