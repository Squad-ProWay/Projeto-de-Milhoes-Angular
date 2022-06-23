import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FuncionariosService } from '../funcionarios.service';
import { HorarioService } from '../horario.service';
import { ServicosService } from '../servicos.service';
import { AuthAdmService } from '../auth-adm.service';
@Component({
  selector: 'app-cadastro-horario',
  templateUrl: './cadastro-horario.component.html',
  styleUrls: ['./cadastro-horario.component.css']
})

export class CadastroHorarioComponent implements OnInit {
  
  servicos:any = []
  funcionarios:any = []
  userLogado: any = {}
  administrador: boolean = false

  constructor(private serviceHorario: HorarioService, private serviceServico: ServicosService, private serviceFuncionario: FuncionariosService, private AuthAdmService: AuthAdmService ) {
    this.serviceServico.getAll().subscribe(x => this.servicos = x)
    this.serviceFuncionario.getAll().subscribe(x => this.funcionarios = x)
    this.pegarPerfilUsuarioConectado();
    this.administrador = this.AuthAdmService.ehAdministrador();
  }

  
  pegarPerfilUsuarioConectado(){
    let user: (string | null) = localStorage.getItem("userConectado")
    if(user != null){
      user = JSON.parse(user)
      this.userLogado = user
    }  
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