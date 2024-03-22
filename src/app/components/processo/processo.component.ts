import { Component, Input, OnInit } from '@angular/core';
import { ParteService } from '../../services/parte.service';

interface Parte {
  label: string;
}

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrl: './processo.component.css'
})
export class ProcessoComponent implements OnInit {


  @Input() numero?: string;
  @Input() parteAutora?: any;
  @Input() parteReu?: any;

  dadosPreenchidos: boolean = false;
  selecionada: boolean = false;

  tiposAutor!: Parte[];
  tiposReu!: Parte[];

  autorSelecionado!: Parte;
  reuSelecionado!: Parte;

  constructor(
    private parteService: ParteService
  ) {
    this.tiposAutorOptions();
    this.tiposReuOptions();
   }

  tiposAutorOptions() {

    this.tiposAutor = [
      { label: 'AUTOR' },
      { label: 'REQUERENTE' },
      { label: 'EXEQUENTE' },
      { label: 'EMBARGANTE' }
    ];

  }

  tiposReuOptions() {

    this.tiposReu = [
      { label: 'REU' },
      { label: 'REQUERIDO' },
      { label: 'EXECUTADO' },
      { label: 'EMBARGADO' }
    ]

  }

  ngOnInit(): void {

    console.log(this.tiposAutorOptions());
    console.log(this.tiposReuOptions());
  }

  salvarDados() {

  }

  isPreenchido(): boolean {
    return this.dadosPreenchidos = !!this.numero;
  }

  onDropdownValueChange(value: any, dropdownName: string) {
    if (dropdownName === 'autor') {
      this.parteAutora = value;
      console.log('Parte selecionada: ', value);
    }
    switch (value) {
      case 'AUTOR':
        this.reuSelecionado.label = 'REU';
        break;
      case 'REQUERENTE':
        this.reuSelecionado.label = 'REQUERIDO';
        break;
      case 'EXEQUENTE':
        this.reuSelecionado.label = 'EXECUTADO';
        break;
      case 'EMBARGANTE':
        this.reuSelecionado.label = 'EMBARGADO';
        break;
      default:
        this.parteReu = undefined;
        break;
    }
    console.error('Mapeamento não encontrado para o autor selecionado');
  }
}
