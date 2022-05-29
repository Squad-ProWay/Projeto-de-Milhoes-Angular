import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-consulta-servico',
  templateUrl: './consulta-servico.component.html',
  styleUrls: ['./consulta-servico.component.css']
})
export class ConsultaServicoComponent implements OnInit {

  msg: string = ""
  servicos: any;

  constructor(private serviceServico: ServicosService) {
    this.serviceServico.getAll().subscribe(x => this.servicos = x)
  }

  gravar(dados: any){
     this.serviceServico.gravar(dados).subscribe(x => window.location.reload())
  }

  ngOnInit(): void {
  
  }

  excluir(id:any) {
    this.serviceServico.excluir(id).subscribe( x=> {window.location.reload()})
  }

}