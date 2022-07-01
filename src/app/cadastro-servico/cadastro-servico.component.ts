import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionariosService } from '../funcionarios.service';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.css']
})
export class CadastroServicoComponent implements OnInit {
  servicos:any = []
  funcionarios:any = []
  msg: string = ""
  isSubmitting = false;

  constructor(private serviceServico: ServicosService, private serviceFuncionario: FuncionariosService, private route: Router) { 
    this.serviceServico.getAll().subscribe(x => this.servicos = x)
    this.serviceFuncionario.getAll().subscribe(x => this.funcionarios = x)
  }

  gravar(dados: any){
    this.isSubmitting = true;
    this.serviceServico.gravar(dados).subscribe(() => {
      (this.msg = 'Cadastro realizado com sucesso!'), 
      (this.isSubmitting = false),
        setTimeout(() => {
          this.msg = ''
        }, 5000)
    })
    
  }
  
  ngOnInit(): void {
  }

}
