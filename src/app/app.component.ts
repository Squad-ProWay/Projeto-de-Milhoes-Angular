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
  
  pegarPerfilUsuarioConectado(){
    let user: (string | null) = localStorage.getItem("userConectado")
    if(user != null){
      user = JSON.parse(user)
      this.userLogado = user
    }  
  }
  constructor( private AuthAdmService: AuthAdmService ){
    this.pegarPerfilUsuarioConectado();
    console.log(this.userLogado)
  }

  logout(){
    localStorage.removeItem("userConectado")
    window.location.reload()
  }

}