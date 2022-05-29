import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  
  
  constructor(private http: HttpClient) {

   }


  logar(email: string, senha: string) {
    return this.http.post('https://app-beautydb.herokuapp.com/usuarios/login', {
      email: email,
      senha: senha
    })
  }

  

  logout () {
    localStorage.removeItem("userConectado")
    window.location.reload()
  }
  
}