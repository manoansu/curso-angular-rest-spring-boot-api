import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';


import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';

const routes: Routes = [
  { 
    path: 'lancamentos', // Listar lancamento
    component: LancamentosPesquisaComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_LANCAMENTO'] } 
  },
  { 
    path: 'lancamentos/novo',  // novo lancamento
    component: LancamentosCadastroComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] } 
  },
  {
    path: 'lancamentos/:codigo', // Edicao de lancamento
    component: LancamentosCadastroComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] } 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }