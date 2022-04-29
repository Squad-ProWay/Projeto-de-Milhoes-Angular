import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-edita-servico',
  templateUrl: './edita-servico.component.html',
  styleUrls: ['./edita-servico.component.css']
})
export class EditaServicoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private serviceServico: ServicosService) { }

  servico: any = {}

  msg: string = ''

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idservico: number = Number(routeParams.get('idservico'))
    this.serviceServico.getOne(idservico).subscribe(x => this.servico = x)
  }

  efetivarAlteracao() {
    this.serviceServico.alterar(this.servico).subscribe(x => this.msg = 'Serviço alterado com sucesso')
  }

}
