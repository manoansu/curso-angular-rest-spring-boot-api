import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoGridComponent } from './lancamento-grid/lancamento-grid.component';
import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    LancamentosCadastroComponent,
    LancamentoGridComponent,
    LancamentosPesquisaComponent

  ],
  imports: [  
    CommonModule,
    InputTextModule,
    InputNumberModule, 
    TableModule, 
    FormsModule, 
    ButtonModule,
    DropdownModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    SharedModule
  ],

  exports:[
    LancamentosCadastroComponent,
    LancamentosPesquisaComponent
  ]
})
export class LancamentosModule { }
