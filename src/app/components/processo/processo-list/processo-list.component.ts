import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../../core/error-handler.service';
import { Processo } from '../shared/processo.model';
import { ProcessoService } from '../shared/processo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-processo-list',
  templateUrl: './processo-list.component.html',
  styleUrl: './processo-list.component.css'
})
export class ProcessoListComponent implements OnInit {

  @ViewChild('tabela') tabela!: any;

  processo = new Processo();
  processos!: Processo[];
  processosSelecionados!: Processo[] | null;

  processoDialog: boolean = false;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private processoService: ProcessoService,
    private error: ErrorHandlerService,
    private confirmacaoService: ConfirmationService,
    private mensagemService: MessageService
  ) { }

  ngOnInit(): void {

    this.listar();
  }

  esconderDialog() {
    this.processoDialog = false;
    this.submitted = false;
  }

  listar() {
    this.processoService.listar()
      .then((dados) => this.processos = dados)
      .catch(erro => this.error.handle(erro));
  }

  salvar() {
    this.submitted = true;

    if (this.processo.numero?.trim()) {
      if (this.processo.id) {
        this.processos[this.findIndexById(this.processo.id)] = this.processo;

        //this.editar(this.processo);

        this.mensagemService.add({
          severity: 'success', summary: 'Sucesso', detail: 'Processo Atualizado', life: 3000
        });
      } else {
        this.processos.push(this.processo);

        //this.processoService.salvar(this.processo);
        this.mensagemService.add({
          severity: 'success', summary: 'Sucesso', detail: 'Processo Criado', life: 3000
        });
      }

      this.processos = [...this.processos];
      this.processoDialog = false;
      this.processo = {};
    }
  }

  editar(processo:Processo){}
  /*
  editar(processo: Processo) {
    this.processo = { ...processo };
    this.processoDialog = true;

   this.router.navigate(['editar',processo.id], {relativeTo: this.route});
  }

  atualizar(processo: Processo) {

    this.processoService.atualizar(processo).subscribe(
      (processoAtualizado: Processo) => {
        const index = this.processos.findIndex(p => p.id === processoAtualizado.id);
        if(index !== -1){
          this.processos[index] = processoAtualizado;
        }

        this.mensagemService.add({ severity: 'success', summary: 'Sucesso', detail: 'Processo Atualizado', life: 3000 })
      },
      error => {
        this.error.handle(error);
      }
    );
  }*/

  deletar(processo: Processo) {

    this.confirmacaoService.confirm({
      message: 'Você tem certeza que quer deletar processo de número ' + processo.numero + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {

        if(processo.id !== undefined) {

          this.processoService.excluir(processo.id)
          .then(() => {
            this.processos = this.processos.filter((value) => value.id !== processo.id);
            this.processo = {};
            this.mensagemService.add({ severity: 'success', summary: 'Sucesso', detail: 'Processo apagado', life: 3000 });
          })
          .catch((erro) => {
            this.error.handle(erro);
            this.mensagemService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir o processo', life: 3000 });
          });

        } else {
          console.error('ID do processo é undefined');
        }
      }
    });
  }

  deletarProcessosSelecionados() {
    this.confirmacaoService.confirm({
      message: 'Tem certeza em deletar os processos selecionados?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.processos = this.processos.filter((value) => !this.processosSelecionados?.includes(value));
        this.processosSelecionados = null;
        this.mensagemService.add({ severity: 'success', summary: 'Sucesso', detail: 'Processos apagados', life: 3000 });
      }
    });
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.processos.length; i++) {
      if (this.processos[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  applyFilterGlobal(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (this.tabela && value) {
      this.tabela.filterGlobal(value, 'contains');
    }
  }
}
