import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private serviceUsuario: UsuarioService) { }

  msg: string = ""

  salvar(dados: any){
    dados.perfil = "USUARIO"
    this.serviceUsuario.gravar(dados).subscribe(x => window.location.reload())
 }

  ngOnInit(): void {
  }

}
