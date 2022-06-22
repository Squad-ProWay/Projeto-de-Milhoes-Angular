import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HorarioService } from '../horario.service';

@Component({
  selector: 'app-edita-horario',
  templateUrl: './edita-horario.component.html',
  styleUrls: ['./edita-horario.component.css']
})
export class EditaHorarioComponent implements OnInit {

  constructor(private route: ActivatedRoute, private horarioService: HorarioService) { }

  horario: any = {}
  msg: string = ''

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idhorario: number = Number(routeParams.get('idhorario'))
    this.horarioService.getOne(idhorario).subscribe(x => this.horario = x)
  }

  efetivarAlteracao() {
    this.horarioService.alterar(this.horario).subscribe(x => this.msg = 'Agendamento alterado com sucesso')
 
    setTimeout(() => {
      window.history.back();
      
    }, 1000);
  }

}
