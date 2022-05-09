import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  gravar(dados: any) {
    let url = 'http://localhost:3000/cadusuario'
    return this.http.post(url, dados);
  }

  getAll() {
    let url = 'http://localhost:3000/usuarios'
    return this.http.get(url)
  }

  alterar(dados: any) {
    let url = `http://localhost:3000/usuarios/${dados.id}`
    return this.http.put(url, dados)
  }
  getOne(idusuario: number) {
    return this.http.get(`http://localhost:3000/usuarios/${idusuario}`)
  }
  excluir(idusuario: number) {
    return this.http.delete(`http://localhost:3000/usuarios${idusuario}`)
  }
}
