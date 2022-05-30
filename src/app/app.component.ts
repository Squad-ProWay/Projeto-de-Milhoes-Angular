import { Component } from '@angular/core';
import { AuthAdmService } from './auth-adm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoCap';

  userLogado: any = {}
  administrador: boolean = false
  usuarioConectado: boolean = false
  
  pegarPerfilUsuarioConectado(){
    let user: (string | null) = localStorage.getItem("userConectado")
    if(user != null){
      user = JSON.parse(user)
      this.userLogado = user
    }  
  }
  constructor( private AuthAdmService: AuthAdmService ){
    this.pegarPerfilUsuarioConectado();
    this.administrador = this.AuthAdmService.ehAdministrador();
    this.usuarioConectado = this.AuthAdmService.temUsuarioLogado();
  }

  logout(){
    localStorage.removeItem("token")
    window.location.reload()
  }

}