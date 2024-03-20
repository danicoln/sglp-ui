import { LaudoPericial } from './../shared/laudo-pericial';
import { Component, OnInit } from '@angular/core';
import { LaudoPericialService } from '../shared/laudo-pericial.service';
import { ErrorHandlerService } from '../../../core/error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';
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
  laudos!: LaudoPericial[];

  laudoDialog: boolean = false;
  submitted: boolean = false;

  listaStatus!: any[];

  laudo!: LaudoPericial;

  laudosSelecionado!: LaudoPericial[] | null;

  constructor(
    private laudoPericialService: LaudoPericialService,
    private error: ErrorHandlerService,
    private mensagemService: MessageService,
    private title: Title,
    private confirmacaoService: ConfirmationService
    ){}

    ngOnInit(): void {

    }

    /*

    ngOnInit(): void {
        this.title.setTitle('Pesquisa de Laudos');
        this.laudoPericialService.pesquisar()
        .then((dados) => (this.laudos = dados));

        this.listaStatus = [
          {label: 'CONCLUÍDO', value: 'concluido'},
          {label: 'AGUARDANDO', value: 'aguardando'},
          {label: 'EM ANDAMENTO', value: 'em andamento'},
        ];
    }
    */


    //TODO: implementar método:
    openNew() {
      this.laudo = {};
      this.submitted = false;
      this.laudoDialog = true;
    }

    //TODO: implementar método:
    deletarLaudosSelecionados() {
      this.confirmacaoService.confirm({
        message: 'Tem certeza em deletar os laudos selecionados?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.laudos = this.laudos.filter((val) => !this.laudosSelecionado?.includes(val));
            this.laudosSelecionado = null;
            this.mensagemService.add({ severity: 'success', summary: 'Successful', detail: 'Laudos apagados', life: 3000 });
        }
    });
    }

    //TODO: implementar método:
    /*

    */
    salvarLaudo() {
      this.submitted = true;

      if(this.laudo.objetivo?.trim()) {
        if(this.laudo.id) {
          this.laudos[this.findIndexById(this.laudo.id)] = this.laudo;
          this.mensagemService.add(
            {severity: 'success', summary: 'Successful', detail: 'Laudo atualizado', life: 3000});
        } else {
          this.laudos.push(this.laudo);
          this.mensagemService.add(
            {severity: 'success', summary: 'Successful', detail: 'Laudo criado', life: 3000});
        }
        this.laudos = [...this.laudos];
        this.laudoDialog = false;
        this.laudo = {};
      }
    }

  findIndexById(id: string): number {
    let index = -1;

    for(let i = 0; i < this.laudos.length; i++) {
      if(this.laudos[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

    //TODO: implementar método:
    esconderDialog() {
      this.laudoDialog = false;
      this.submitted = false;
    }

    /**
     *
    pesquisar(pagina = 0) {

      this.filtro.pagina = pagina;

      this.laudoPericialService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.laudos = resultado;
      })
      .catch(erro => this.error.handle(erro));
    }
     */

    editarLaudo(laudo: LaudoPericial) {
      this.laudo = {...laudo };
      this.laudoDialog = true;
    }

    deletarLaudo(laudo: LaudoPericial) {
      this.confirmacaoService.confirm({
        message: 'Você tem certeza que quer deletar' + laudo.id + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.laudos = this.laudos.filter((val) => val.id !== laudo.id);
            this.laudo = {};
            this.mensagemService.add({ severity: 'success', summary: 'Successful', detail: 'Laudo pericial deletado', life: 3000 });
        }
      });
    }

    getSeverity(status: string) {
      switch (status) {
          case 'CONCLUÍDO':
              return 'success';
          case 'AGUARDANDO':
              return 'warning';
          case 'EM ANDAMENTO':
              return 'danger';
      }
      return;
  }

}
