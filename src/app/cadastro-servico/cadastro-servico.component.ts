import { Component, OnInit } from '@angular/core';
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
  
  constructor(private serviceServico: ServicosService, private serviceFuncionario: FuncionariosService) { 
    this.serviceServico.getAll().subscribe(x => this.servicos = x)
    this.serviceFuncionario.getAll().subscribe(x => this.funcionarios = x)
  }

  gravar(dados: any){
    this.serviceServico.gravar(dados).subscribe(x => window.location.reload())
  }
  
  ngOnInit(): void {
  }

}
