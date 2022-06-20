import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
})
export class CadastroUsuarioComponent implements OnInit {
  constructor(private serviceUsuario: UsuarioService) {}

  msg: string = '';
  validCpf: boolean = false;

  //VALIDAR CPF

  validateCPF(cpf: string) {
    let Soma = 0;
    let Resto;

    for (let i = 1; i <= 9; i++)
      Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(cpf.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }

  //SALVAR  
  salvar(dados: any) {
    if (this.validateCPF(dados.cpf)) {
      dados.perfil = 'USUARIO';
      this.serviceUsuario
        .gravar(dados)
        .subscribe((x) => window.location.reload());

    } else {
      this.validCpf = true;

    }
  }

  ngOnInit(): void {}
}
