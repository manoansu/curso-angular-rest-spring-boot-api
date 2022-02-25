import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { CategoriaService } from './../../categorias/categoria.service';

import { Lancamento } from './../../core/model';
import { MessageService } from 'primeng/api';
import { LancamentoService } from '../lancamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-lancamentos-cadastro',
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrls: ['./lancamentos-cadastro.component.css']
})
export class LancamentosCadastroComponent implements OnInit {


tipos =[
  { label:'Receita', value:'RECEITA'},
  { label:'Despesa', value:'DESPESA'}
];

categorias =[];
pessoas =[];
lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private messageService: MessageService,
    private lancamentoService: LancamentoService,
    private errorHandler: ErrorHandlerService,
    private activedroute: ActivatedRoute,
    private router: Router,
    private title: Title
    ) { }

  ngOnInit(): void {

    const codigoLancamento = this.activedroute.snapshot.params['codigo'];

    this.title.setTitle('Novo lançamento');

    if (codigoLancamento) {
      this.carregarLancamento(codigoLancamento)
    }
    this.carregarCategorias();
    this.carregarPessoas();
  }

  get editando() {
    return Boolean(this.lancamento.codigo)
  }
  
  carregarLancamento(codigo: number) {
    this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.lancamento = lancamento;
        this.atualizarTitleEdicao();
      },
      erro => this.errorHandler.handle(erro));
  }

  carregarCategorias() {
    return this.categoriaService.listarTodas()
      .then(categorias => {
        this.categorias = categorias
          .map((c:any) => ({ label: c.nome, value: c.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPessoas() {
    this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas
          .map((p:any) => ({ label: p.nome, value: p.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarLancamento(form)
    } else {
      this.adicionarLancamento(form)
    }
  }

  atualizarLancamento(form: NgForm) {
    this.lancamentoService.atualizar(this.lancamento)
      .then((lancamento:Lancamento) => {
          this.lancamento = lancamento;
          this.messageService.add({ severity: 'success', detail: 'Lançamento alterado com sucesso!' });
          this.atualizarTitleEdicao();
        }
      ).catch(erro => this.errorHandler.handle(erro))
  }

  adicionarLancamento(form: NgForm) {
    this.lancamentoService.adicionar(this.lancamento)
      .then(lancamentoAdicionado => {
          this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' });

          //form.reset();
          //this.lancamento = new Lancamento();
          this.router.navigate(['/lancamentos', lancamentoAdicionado.codigo]);
        }
      ).catch(erro => this.errorHandler.handle(erro));    
  }

  novo(lancamentoForm: NgForm) {
    lancamentoForm.reset(new Lancamento);

    this.router.navigate(['lancamentos/novo']);
  }

  atualizarTitleEdicao(){
    this.title.setTitle(`Edção de lançamento: ${this.lancamento.descricao}`);
  }
}
