import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.css']
})
export class ConsultaUsuarioComponent implements OnInit {

  msg: string = ""
  usuario: any;

  constructor(private serviceUsuario: UsuarioService) {
    this.serviceUsuario.getAll().subscribe(x => this.usuario = x)
   }

  gravar(dados: any){
     this.serviceUsuario.gravar(dados).subscribe(x => window.location.reload())
  }

  ngOnInit(): void {
  
  }

  excluir(id:any) {
    this.serviceUsuario.excluir(id).subscribe( x=> {window.location.reload()})
  }
}
