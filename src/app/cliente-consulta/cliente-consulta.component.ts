import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html',
  styleUrls: ['./cliente-consulta.component.css']
})
export class ClienteConsultaComponent implements OnInit {

  msg: string = ""
  cliente: any;

  constructor(private clienteService: ClienteService) {
    this.clienteService.getAll().subscribe(x => this.cliente = x)
   }

  gravar(dados: any){
     this.clienteService.gravar(dados).subscribe(x => window.location.reload())
  }

  ngOnInit(): void {
  
  }

  excluir(id:any) {
    this.clienteService.excluir(id).subscribe( x=> {window.location.reload()})
  }
}