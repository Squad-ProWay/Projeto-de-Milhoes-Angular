import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../horario.service';

@Component({
  selector: 'app-consulta-horario',
  templateUrl: './consulta-horario.component.html',
  styleUrls: ['./consulta-horario.component.css']
})
export class ConsultaHorarioComponent implements OnInit {

  msg: string = ""
  horarios: any;

  constructor(private horarioService: HorarioService) {
    this.horarioService.getAll().subscribe(x => this.horarios = x)
   }

  gravar(dados: any){
     this.horarioService.gravar(dados).subscribe(x => window.location.reload())
  }

  ngOnInit(): void {
  
  }

  excluir(id:any) {
    this.horarioService.excluir(id).subscribe( x=> {window.location.reload()})
  }

}