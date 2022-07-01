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
  isSubmitting = false;
  msg: string = ''

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idcliente: number = Number(routeParams.get('idcliente'))
    this.serviceCliente.getOne(idcliente).subscribe(x => this.cliente = x)
  }

  efetivarAlteracao() {
    this.isSubmitting = true;
    this.serviceCliente.alterar(this.cliente).subscribe(() => {
      (this.msg = 'Cliente alterado com sucesso'),
        (this.isSubmitting = false),
        setTimeout(() => {
          this.msg = ''
        }, 5000)
    })
  }

}
