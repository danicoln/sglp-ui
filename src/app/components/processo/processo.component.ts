import { Parte } from './../../model/parte';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Processo } from './shared/processo.model';
import { ProcessoService } from './shared/processo.service';
import { ErrorHandlerService } from '../../core/error-handler.service';


@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrl: './processo.component.css'
})
export class ProcessoComponent implements OnInit {

/**
 @Input() numero?: string;
 @Input() parteAutora?: any;
 @Input() parteReu?: any;
 *
 */

  processo: Processo = new Processo();
  formGroup!: FormGroup;

  //tiposAutor!: string[];
  //tiposReu!: string[];

  constructor(
    private processoService: ProcessoService,
    private formBuilder: FormBuilder,
    private error: ErrorHandlerService
  ) {
   }

   ngOnInit(): void {
    this.buildResourceForm();
    this.tiposDeAutor();
    this.tiposDeReu();

    }

    private buildResourceForm() {
      this.formGroup = this.formBuilder.group({
        id: [null],
        numero: [null, Validators.required],
        comarca: [null],
        vara: [null],
        assunto: [''],
        nomeAutor: [''],
        nomeReu: [''],
        parteAutora: [''],
        parteReu: ['']
        //parteAutora: this.formBuilder.group({tipo: [null]}),
       // parteReu: this.formBuilder.group({tipo: [null]}),
      });
    }


    submitForm() {
      if(this.formGroup && this.formGroup.valid) {
        const dadosFormularios = this.formGroup.value;

        console.log(dadosFormularios);
        this.formGroup.get('parteAutora')?.setValue(dadosFormularios.parteAutora?.value);
        this.formGroup.get('parteReu')?.setValue(dadosFormularios.parteReu?.value);
        this.processo = {
          numero: dadosFormularios.numero,
          comarca: dadosFormularios.comarca,
          vara: dadosFormularios.vara,
          parteAutora: dadosFormularios.parteAutora?.value,
          parteReu: dadosFormularios.parteReu?.value,
          nomeAutor: dadosFormularios.nomeAutor,
          nomeReu: dadosFormularios.nomeReu,
          assunto: dadosFormularios.assunto
        };

        this.salvarDadosProcesso(this.processo);
        console.log('Tipo de dado => Autora', this.processo.parteAutora);

      } else {
        this.formGroup?.markAllAsTouched();
      }
    }


    tiposDeAutor(): string[] {
      return [

        'AUTOR',
        'REQUERENTE',
        'EXEQUENTE',
        'EMBARGANTE'
        /**

         {tipo: 'AUTOR'},
         {tipo: 'REQUERENTE'}
         */
      ];
    }

    tiposDeReu(): string[] {
      return [
        /**
         {tipo: 'REU'},
         {tipo: 'REQUERIDO'}
         *
         */
        'REU',
        'REQUERIDO',
        'EXECUTADO',
        'EMBARGADO'
      ];
    }

/**
 *
salvar(form: NgForm) {
  if(this.editando) {
    this.atualizarDadosProcesso(form);
  } else {
    this.salvarDadosProcesso(form);
  }
}
 *
 */

  atualizarDadosProcesso(form: NgForm){

  }

  salvarDadosProcesso(processo: Processo) {
    this.processoService.salvar(processo)
    .then(() => {
      //implementar msg toast
      console.log('TOAST: Processo salvo!', processo);
      this.processo = new Processo();
      this.formGroup?.reset();

    })
    .catch(erro => this.error.handle(erro));
  }

  get editando() {
    return Boolean(this.processo.id);
  }


}
