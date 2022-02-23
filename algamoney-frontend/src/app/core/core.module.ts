import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHendlerService } from './error-hendler.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';


import localePt from '@angular/common/locales/pt';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { PaginaNaoEncontradoComponent } from './pagina-nao-encontrado.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradoComponent
  ],
  imports: [  
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [
    DatePipe,
    LancamentoService,
    MessageService,
    ConfirmationService,
    TranslateService,
    ErrorHendlerService,
    Title,
    {provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }