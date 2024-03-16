import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private message: MessageService){

  }

  handle(errorResponse: any) {
    let mensagem: any;

    if(typeof errorResponse === 'string') {
      mensagem = errorResponse;
    }else if(errorResponse instanceof HttpErrorResponse && errorResponse.status >= 400
      && errorResponse.status <= 499) {
        mensagem = 'Ocorreu um erro ao processar a sua solicitação';

        try{
          mensagem = errorResponse.error[0].mensagemUsuario;
        }catch(e){}
        console.error('Ocorreu um erro', errorResponse);
      }

      this.message.add({severity: 'error', summary: 'Erro',
      detail: 'Infelizmente ocorreu um erro, verifique e tente novamente.'});
  }
}
