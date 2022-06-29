import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionariosService } from '../funcionarios.service';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  servicos: any = {}
  
  constructor(private serviceFuncionario: FuncionariosService, private route: Router, private serviceServico: ServicosService) {
    this.serviceServico.getAll().subscribe(x => this.servicos = x)
   }
  validCpf: boolean = false;
  msg: string = "";


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

  gravar(dados: any){
    this.serviceFuncionario.gravar(dados).subscribe(x => this.msg = 'Funcionário cadastrado com sucesso!')

    setTimeout(() => {
      this.route.navigate(["consultaFuncionario"])
      
    }, 3000);
 }


  ngOnInit(): void {
  }

}
