import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { ObjetivoComponent } from '../components/objetivo/objetivo.component';
import { ProcessoComponent } from '../components/processo/processo.component';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from '../components/dropdown/dropdown.component';



@NgModule({
  declarations: [
    ObjetivoComponent,
    ProcessoComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule,
    CardModule,
    FieldsetModule,
    InputTextareaModule,
    ButtonModule,
    InputTextModule,
    DropdownModule
  ],
  exports: [
    ObjetivoComponent,
    ProcessoComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
