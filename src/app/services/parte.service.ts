import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParteService {

  constructor() { }

  partes!: any[];

  getParteOptions() {

    this.partes = [
      { label: "AUTOR" },
      { label: "REQUERENTE" },
      { label: "EXEQUENTE" },
      { label: "EMBARGANTE" },
      { label: "REU" },
      { label: "REQUERIDO" },
      { label: "EXECUTADO" },
      { label: "EMBARGADO" }

    ];

    return this.partes;
  }
}
