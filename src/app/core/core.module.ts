import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ErrorHandlerService } from './error-handler.service';
import { LaudoPericialService } from '../components/laudo-pericial/shared/laudo-pericial.service';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ErrorHandlerService,
    LaudoPericialService,
    MessageService
  ]
})
export class CoreModule { }
