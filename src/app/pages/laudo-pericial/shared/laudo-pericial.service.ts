import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LaudoPericial } from './laudo-pericial';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaudoPericialService {

  chave: string = '';

  url = "http://localhost:8080/api/laudos";


  constructor(
    private http: HttpClient
  ) { }

  //CONFERIR
  pesquisar(): Promise<any> {
    const headers = new HttpHeaders().set('Authorization', this.chave);
    let paramentros = new HttpParams();

/**
 if (laudo.objetivo) {
   paramentros.set('objetivo', laudo.objetivo);
 }
 */

    return this.http.get<any>(`${this.url}`,
      { headers, params: paramentros })
      .toPromise()
      .then((response: any) => {
        const respostaJson = response;
        const dadosLaudo = respostaJson.content;

        const resultado = {
          dadosLaudo
        }
        return resultado;
      });
  }

  //CONFERIR
  adicionar(laudo: LaudoPericial): Promise<LaudoPericial> {
    const headers = new HttpHeaders()
      .append('Authorization', this.chave)
      .append('Content-Type', 'application/json');

    return firstValueFrom(this.http.post<LaudoPericial>(this.url, laudo, { headers }));
  }

  //CONFERIR
  listar(): Promise<any[]> {
    const headers = new HttpHeaders().set('Authorization', this.chave);

    return this.http.get(`${this.url}`, { headers })
      .toPromise()
      .then((response: any) => {
        return response;
      });

  }

}
