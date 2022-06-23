import { Component, Injectable, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})

@Injectable()

export class ClienteCadastroComponent implements OnInit {

  
  constructor(private serviceCliente: ClienteService) { }

  msg: string = ""

  salvar(dados: any){
    console.log(dados)
    this.serviceCliente.gravar(dados).subscribe(x => window.location.reload())
 }

  ngOnInit(): void {
  }

}
