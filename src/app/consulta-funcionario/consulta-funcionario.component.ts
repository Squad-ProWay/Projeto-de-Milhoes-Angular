import { FuncionariosService } from './../funcionarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-funcionario',
  templateUrl: './consulta-funcionario.component.html',
  styleUrls: ['./consulta-funcionario.component.css']
})
export class ConsultaFuncionarioComponent implements OnInit {

  msg: string = ""
  funcionario: any;

  constructor(private serviceFuncionario: FuncionariosService) {
    this.serviceFuncionario.getAll().subscribe(x => this.funcionario = x)
   }

  gravar(dados: any){
     this.serviceFuncionario.gravar(dados).subscribe(x => window.location.reload())
  }

  ngOnInit(): void {
  
  }

  excluir(id:any) {
    this.serviceFuncionario.excluir(id).subscribe( x=> {window.location.reload()})
  }

}
