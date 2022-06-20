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
  validPass: boolean = false;

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

  //VALIDAR SENHA FORTE - RULES:
  // 1 - Letra maíuscula
  //2 - Letra minúscula
  //3 - Número
  //4 - Caractere especial.

  validatePass(senha: string) {
    var retorno = false;
    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/;
    var numeros = /[0-9]/;
    var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_|?]/;
    if (senha.length > 8) {
      return retorno;
    }
    if (senha.length < 8) {
      return retorno;
    }
    var auxMaiuscula = 0;
    var auxMinuscula = 0;
    var auxNumero = 0;
    var auxEspecial = 0;
    for (var i = 0; i < senha.length; i++) {
      if (letrasMaiusculas.test(senha[i])) auxMaiuscula++;
      else if (letrasMinusculas.test(senha[i])) auxMinuscula++;
      else if (numeros.test(senha[i])) auxNumero++;
      else if (caracteresEspeciais.test(senha[i])) auxEspecial++;
    }
    if (auxMaiuscula > 0) {
      if (auxMinuscula > 0) {
        if (auxNumero > 0) {
          if (auxEspecial) {
            retorno = true;
          }
        }
      }
    }
    return retorno;
  }

  //SALVAR
  salvar(dados: any) {
    if (this.validateCPF(dados.cpf) && this.validatePass(dados.senha)) {
      dados.perfil = 'USUARIO';
      this.serviceUsuario
        .gravar(dados)
        .subscribe((x) => window.location.reload());

    } else {
      this.validCpf = true;
      this.validPass = true;

    
    }
  }

  ngOnInit(): void {}
}
