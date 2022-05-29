import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-edita',
  templateUrl: './cliente-edita.component.html',
  styleUrls: ['./cliente-edita.component.css']
})
export class ClienteEditaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private serviceCliente: ClienteService) { }

  cliente: any = {}

  msg: string = ''

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idcliente: number = Number(routeParams.get('idcliente'))
    this.serviceCliente.getOne(idcliente).subscribe(x => this.cliente = x)
  }

  efetivarAlteracao() {
    this.serviceCliente.alterar(this.cliente).subscribe(x => this.msg = 'Cliente alterado com sucesso')
 
    setTimeout(() => {
      window.history.back();
      
    }, 5000);
  }

}
