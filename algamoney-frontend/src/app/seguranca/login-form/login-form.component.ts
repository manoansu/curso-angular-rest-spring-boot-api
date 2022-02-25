import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private errorHendler: ErrorHandlerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(usuario:string, senha:string){
    this.auth.login(usuario, senha)
      .then(() =>{
        this.router.navigate(['/lancamentos']);
      })
      .catch(erro => {
        this.errorHendler.handle(erro);
      });
  }

}
