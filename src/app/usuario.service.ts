import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  gravar(dados: any) {
    let url = 'http://localhost:3000/usuarios'
    return this.http.post(url, dados);
  }

  getAll() {
    let url = 'http://localhost:3000/usuarios'
    return this.http.get(url)
  }
}
