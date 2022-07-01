import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsuarioService} from '../usuario.service';


@Component({
  selector: 'app-edita-usuario',
  templateUrl: './edita-usuario.component.html',
  styleUrls: ['./edita-usuario.component.css']
})
export class EditaUsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute, private serviceUsuario: UsuarioService) { }

  usuario: any = {}

  msg: string = ''

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idusuario: number = Number(routeParams.get('idusuario'))
    this.serviceUsuario.getOne(idusuario).subscribe(x => this.usuario = x)
  }

  efetivarAlteracao() {
    this.serviceUsuario.alterar(this.usuario).subscribe(x => this.msg = 'Usuário alterado com sucesso')
 
    setTimeout(() => {
      window.history.back();
      
    }, 1000);
  }

}
