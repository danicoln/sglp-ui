import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Processo } from "./processo.model";

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  chave: string = '';

  url = "http://localhost:8080/api/processos";


  constructor(
    private http: HttpClient
  ) { }


  salvar(dadosProcesso: Processo): Promise<Processo> {
    const headers = new HttpHeaders()
    .append('Authorization', this.chave)
    .append('Content-Type', 'application/json');

    return firstValueFrom(this.http.post<Processo>(this.url, dadosProcesso, {headers}));

  }

  async listar(): Promise<Processo[]> {
    const headers = new HttpHeaders().set('Authorization', this.chave);

    try{
      const response = await this.http.get<Processo[]>(this.url, { headers }).toPromise();
      return response || [];

    } catch (error) {

      console.error('Erro ao listar laudos:', error);
      throw error;
    }

  }

}
