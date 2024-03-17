import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaudoPericialComponent } from './laudo-cadastro/laudo-pericial.component';
import { LaudoPericialRoutingModule } from './laudo-pericial-routing.module';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { FormsModule } from '@angular/forms';
import { LaudoListComponent } from './laudo-list/laudo-list.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LaudoPericialComponent,
    LaudoListComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    SharedModule,

    LaudoPericialRoutingModule
  ]
})
export class LaudoPericialModule { }
