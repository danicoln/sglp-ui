import { Component } from '@angular/core';

@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.component.html',
  styleUrl: './objetivo.component.css'
})
export class ObjetivoComponent {

  objetivoPreenchido: boolean = false;
  objetivo!: string;

}
