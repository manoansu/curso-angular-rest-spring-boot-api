import { NgModule } from '@angular/core';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { LancamentosCadastroComponent } from './lancamentos/lancamentos-cadastro/lancamentos-cadastro.component';
import { PessoasCadastradoComponent } from './pessoas/pessoas-cadastrado/pessoas-cadastrado.component';
import { PaginaNaoEncontradoComponent } from './core/pagina-nao-encontrado.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full'  },
  { path: 'lancamentos', component: LancamentosPesquisaComponent },
  { path: 'lancamentos/novo', component: LancamentosCadastroComponent },
  { path: 'lancamentos/:codigo', component: LancamentosCadastroComponent },
  { path: 'pessoas', component: PessoasPesquisaComponent },
  { path: 'pessoas/novo', component: PessoasCadastradoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradoComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada'  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
