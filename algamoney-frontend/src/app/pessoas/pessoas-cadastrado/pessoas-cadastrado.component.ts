import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { MessageService } from 'primeng/api';
import { Pessoa } from './../../core/model';
import { ErrorHendlerService } from './../../core/error-hendler.service';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pessoas-cadastrado',
  templateUrl: './pessoas-cadastrado.component.html',
  styleUrls: ['./pessoas-cadastrado.component.css']
})
export class PessoasCadastradoComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private messageService: MessageService,
    private errorHandler: ErrorHendlerService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Nova pessoa');
  }

  salvar(form: NgForm) {
    this.pessoaService.adicionar(this.pessoa)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' });

        form.reset();
        this.pessoa = new Pessoa();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao(){
    this.title.setTitle(`Edição de pessoa: ${this.pessoa.nome}`);
  }

}
