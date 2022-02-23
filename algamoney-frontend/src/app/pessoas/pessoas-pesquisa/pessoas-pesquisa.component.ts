import { Component, OnInit, ViewChild } from '@angular/core';
import { PessoaFiltro, PessoaService } from './../pessoa.service';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ErrorHendlerService } from './../../core/error-hendler.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit{

  totalRegistros = 0;
  filtro = new PessoaFiltro()
  pessoas: any[] = [];

  @ViewChild('tabela') grid!:any

  constructor(
    private pessoaService: PessoaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHendlerService: ErrorHendlerService,
    private title: Title
    ) { }

    ngOnInit(): void {
        this.title.setTitle('Pesquisa de pessoas');
    }

  pesquisar(pagina: number = 0): void {        
    this.filtro.pagina = pagina;
    
    this.pessoaService.pesquisar(this.filtro)
      .then((dados: any) => {
        this.pessoas = dados.pessoas;
        this.totalRegistros = dados.total; 
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
      const pagina = event!.first! / event!.rows!;
      this.pesquisar(pagina);
  }

  confirmarExclusao(pessoa: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
          this.excluir(pessoa);
      }
    });
  }

  excluir(lancamento: any) {
    this.pessoaService.excluir(lancamento.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.reset();
        }

        this.messageService.add({ severity: 'success', detail: 'Pessoa excluído com sucesso!' })
      }).catch(error => this.errorHendlerService.handle(error));
  }

  alternarStatus(pessoa:any){
    const novoStatus = !pessoa.ativo;

    this.pessoaService.mudadarStatus(pessoa.codigo, novoStatus)
      .then(() =>{
        const accao = novoStatus ? 'ativado' : 'desativada';

        pessoa.ativo = novoStatus;
        this.messageService.add({ severity: 'success', detail: `Pessoa ${accao} com sucesso!` })
      }).catch(error => this.errorHendlerService.handle(error));
      
  }
}
