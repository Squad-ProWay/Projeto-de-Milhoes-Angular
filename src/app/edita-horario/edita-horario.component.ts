import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionariosService } from '../funcionarios.service';
import { HorarioService } from '../horario.service';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-edita-horario',
  templateUrl: './edita-horario.component.html',
  styleUrls: ['./edita-horario.component.css']
})
export class EditaHorarioComponent implements OnInit {

  constructor(private route: ActivatedRoute, private horarioService: HorarioService, private serviceServico: ServicosService, private serviceFuncionario: FuncionariosService) { }

  horario: any = {}
  servicos: any = {}
  funcionarios: any = {}
  msg: string = ''

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idhorario: number = Number(routeParams.get('idhorario'))
    this.horarioService.getOne(idhorario).subscribe(x => this.horario = x)
    this.serviceServico.getAll().subscribe(x => this.servicos = x)
    this.serviceFuncionario.getAll().subscribe(x => this.funcionarios = x)
  }

  efetivarAlteracao() {
    this.horarioService.alterar(this.horario).subscribe(x => this.msg = 'Agendamento alterado com sucesso')
 
    setTimeout(() => {
      window.history.back();
      
    }, 1000);
  }

}
