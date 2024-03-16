import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaudoPericialComponent } from './laudo-cadastro/laudo-pericial.component';
import { LaudoPericialRoutingModule } from './laudo-pericial-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LaudoPericialComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule,

    LaudoPericialRoutingModule
  ]
})
export class LaudoPericialModule { }
