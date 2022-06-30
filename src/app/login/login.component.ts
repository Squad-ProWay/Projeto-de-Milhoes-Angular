
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { DecodeTokenService } from '../decode-token.service';
import { UsuarioService } from '../usuario.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService, private decodeToken: DecodeTokenService, private serviceUsuario: UsuarioService,
     private formBuilder: FormBuilder, private route:Router) { }

  usuarios: any = []
  mensagem: any = []


  usuarioConectado = {
    id: 0,
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    perfil: ''
  }

  logar(form: any) {
    this.auth.logar(form.email, form.senha).subscribe(
      res =>  { 
        if (res.token) {
          localStorage.setItem('token', res.token)
          window.location.href = "/#"
          //this.route.navigate(["home"])
        } else {
          this.mensagem = "Usuário e/ou senha incorretos";
        }
      }, err => this.mensagem = "Usuário e/ou senha incorretos")
  }



  verToken() {
    let usuario = this.decodeToken.decodeTokenJWT()
    console.log(usuario);
  }

  fazerLogin(dados: any) {
    this.serviceUsuario.getAll().subscribe(x => {
      this.usuarios = x
      this.verificarLogin(dados.email, dados.senha, this.usuarios)
      window.location.href = "/#"
    })
  }

  verificarLogin(email: string, senha: string, dados: any) {
    localStorage.removeItem("UserConectado")
    for (let i = 0; i < dados.length; i++) {
      if (email == dados[i].email && senha == dados[i].senha) {
        this.usuarioConectado.id = dados[i].id
        this.usuarioConectado.nome = dados[i].nome
        this.usuarioConectado.email = dados[i].email
        this.usuarioConectado.cpf = dados[i].cpf
        this.usuarioConectado.senha = dados[i].senha
        this.usuarioConectado.perfil = dados[i].perfil
        this.gravarDadosLocalStorage()
      }
    }

    window.location.reload();
  }


  gravarDadosLocalStorage() {
    localStorage.setItem("userConectado", JSON.stringify(this.usuarioConectado))
  }

  ngOnInit() {
  }

  logOut(): void {

  }

}


