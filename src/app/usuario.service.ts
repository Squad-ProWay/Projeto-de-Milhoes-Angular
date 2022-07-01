import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  gravar(dados: any) {
    let url = 'https://app-beautydb.herokuapp.com/usuarios'
    return this.http.post(url, dados, { responseType: 'text' });
  }

  getAll() {
    let url = 'https://app-beautydb.herokuapp.com/usuarios'
    return this.http.get(url)
  }

  alterar(dados: any) {
    let url = `https://app-beautydb.herokuapp.com/usuarios/${dados.id}`
    return this.http.put(url, dados, { responseType: 'text' })
  }
  getOne(idusuario: number) {
    return this.http.get(`https://app-beautydb.herokuapp.com/usuarios/${idusuario}`)
  }
  excluir(idusuario: number) {
    return this.http.delete(`https://app-beautydb.herokuapp.com/usuarios/${idusuario}`)
  }
}
