import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaudoPericialComponent } from './laudo-cadastro/laudo-pericial.component';

const routes: Routes = [
  //{ path: 'laudos', component: LaudoPericialListComponent },
  { path: 'laudos/novo', component: LaudoPericialComponent },
  { path: 'laudos/:id', component: LaudoPericialComponent }

]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class LaudoPericialRoutingModule { }
