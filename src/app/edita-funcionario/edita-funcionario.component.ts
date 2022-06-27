import { FuncionariosService } from './../funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-edita-funcionario',
  templateUrl: './edita-funcionario.component.html',
  styleUrls: ['./edita-funcionario.component.css']
})
export class EditaFuncionarioComponent implements OnInit {

  servicos:any = [] 
  constructor(private route: ActivatedRoute, private serviceFuncionario: FuncionariosService, private serviceServico: ServicosService) { 
    this.serviceServico.getAll().subscribe(x => this.servicos = x)
  }

  funcionario: any = {}

  msg: string = ''

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idfuncionario: number = Number(routeParams.get('idfuncionario'))
    this.serviceFuncionario.getOne(idfuncionario).subscribe(x => this.funcionario = x)
  }

  efetivarAlteracao() {
    this.serviceFuncionario.alterar(this.funcionario).subscribe(x => this.msg = 'Funcionário alterado com sucesso')
    
    setTimeout(() => {
      window.history.back();
      
    }, 1000);
  }


}
