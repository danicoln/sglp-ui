import { Component, OnInit } from '@angular/core';
import { LaudoPericialService } from '../shared/laudo-pericial.service';
import { ErrorHandlerService } from '../../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { LaudoFilter } from '../shared/laudo.filter';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-laudo-list',
  templateUrl: './laudo-list.component.html',
  styleUrl: './laudo-list.component.css'
})
export class LaudoListComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LaudoFilter();
  laudos: any = [];

  constructor(
    private laudoPericialService: LaudoPericialService,
    private error: ErrorHandlerService,
    private mensagemService: MessageService,
    private title: Title
    ){}

    ngOnInit(): void {
        this.title.setTitle('Pesquisa de Laudos');
    }

    pesquisar(pagina = 0) {

      this.filtro.pagina = pagina;

      this.laudoPericialService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.laudos = resultado;
      })
      .catch(erro => this.error.handle(erro));
    }


}
