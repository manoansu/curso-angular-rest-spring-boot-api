import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoasCadastradoComponent } from './pessoas-cadastrado/pessoas-cadastrado.component';
import { PessoaGridComponent } from './pessoa-grid/pessoa-grid.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputMaskModule } from 'primeng/inputmask';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [
    PessoasCadastradoComponent,
    PessoaGridComponent,
    PessoasPesquisaComponent
  ],
  imports: [
  CommonModule,
    InputTextModule,
    InputNumberModule, 
    InputMaskModule,
    TableModule, 
    FormsModule, 
    ButtonModule,
    DropdownModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    SharedModule
  ],
  exports:[
    PessoasCadastradoComponent,
    PessoasPesquisaComponent
  ]
})
export class PessoasModule { }
