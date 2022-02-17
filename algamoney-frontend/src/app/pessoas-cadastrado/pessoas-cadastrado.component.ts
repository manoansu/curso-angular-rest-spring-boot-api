import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-cadastrado',
  templateUrl: './pessoas-cadastrado.component.html',
  styleUrls: ['./pessoas-cadastrado.component.css']
})
export class PessoasCadastradoComponent implements OnInit {

  cidades =[
    { label:'Alimentação', value:'1'},
    { label:'Transporte', value:'2'}
  ];
  
  estados =[
    { label:'João Silva', value:'1'},
    { label:'Sebastião Souza', value:'2'},
    { label:'Maria Abdadia', value:'3'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
