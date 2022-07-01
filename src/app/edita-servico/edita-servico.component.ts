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
  isSubmitting = false;
  msg: string = ''

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idservico: number = Number(routeParams.get('idservico'))
    this.serviceServico.getOne(idservico).subscribe(x => this.servico = x)
  }

  efetivarAlteracao() {
    this.isSubmitting = true;
    this.serviceServico.alterar(this.servico).subscribe(() =>{
      (this.msg = 'Serviço alterado com sucesso'),
      (this.isSubmitting = false),
      setTimeout(() => {
        this.msg = ''
      }, 5000)
    })

  }

}
