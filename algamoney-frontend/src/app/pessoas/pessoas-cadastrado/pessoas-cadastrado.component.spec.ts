import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasCadastradoComponent } from './pessoas-cadastrado.component';

describe('PessoasCadastradoComponent', () => {
  let component: PessoasCadastradoComponent;
  let fixture: ComponentFixture<PessoasCadastradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasCadastradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasCadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
