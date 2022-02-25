import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginaNaoEncontradoComponent } from "../core/pagina-nao-encontrado.component";
import { AuthGuard } from "../seguranca/auth.guard";
import { PessoasCadastradoComponent } from "./pessoas-cadastrado/pessoas-cadastrado.component";
import { PessoasPesquisaComponent } from "./pessoas-pesquisa/pessoas-pesquisa.component";


const routes: Routes = [
    { 
      path: 'pessoas', 
      component: PessoasPesquisaComponent,
      canActivate:[AuthGuard],
      data: { roles: ['RROLE_PESQUISAR_PESSOA']} // só é permitido para essa regara no lancamento
     },
    { 
      path: 'pessoas/novo', 
      component: PessoasCadastradoComponent,
      canActivate:[AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_PESSOA']} // só é permitido para essa regara no lancamento 
    },
    {
      path: 'pessoas/:codigo', 
      component: PessoasCadastradoComponent, 
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_PESSOA'] } 
    },
    { 
      path: 'pagina-nao-encontrada', 
      component: PaginaNaoEncontradoComponent,
      canActivate:[AuthGuard],
      //data: { roles: ['ROLE_PESQUISAR_LANCAMENTO']} // só é permitido para essa regara no lancamento 
    },
  ];

@NgModule({
    declarations: [

    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
  })
  export class PessoasRoutingModule { }
  