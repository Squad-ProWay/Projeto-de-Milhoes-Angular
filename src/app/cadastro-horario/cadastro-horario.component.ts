import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HorarioService } from '../horario.service';
import { ServicosService } from '../servicos.service';
@Component({
  selector: 'app-cadastro-horario',
  templateUrl: './cadastro-horario.component.html',
  styleUrls: ['./cadastro-horario.component.css']
})

export class CadastroHorarioComponent implements OnInit {
  servicos:any = []

  constructor(private serviceHorario: HorarioService, private serviceServico: ServicosService) {
    this.serviceServico.getAll().subscribe(x => this.servicos = x)
  }

 
  /*gravar(dados: any){
    this.serviceHorario.gravar(dados).subscribe(x => window.location.href = "/consultaHorario")
  }*/

  gravar(dados: any){
    this.serviceHorario.gravar(dados).subscribe(x => window.location.reload())
  }

  omitirCharEspecial(event: { charCode: any; }){
    var k;  
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
  }
  
  ngOnInit(): void {
  }

}
