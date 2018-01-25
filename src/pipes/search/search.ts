import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(lista_filmes: any[], terms: string): any[] {
    if(!lista_filmes) return [];
    if(!terms) return lista_filmes;
    terms = terms.toLowerCase();
    return lista_filmes.filter( it => {
      return it.name.toLowerCase().includes(terms);
    });
  }
}

