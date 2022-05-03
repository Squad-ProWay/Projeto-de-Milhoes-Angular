import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http: HttpClient) { }

  gravar(dados: any) {
    let url = 'http://localhost:8081/servicos'
    return this.http.post(url, dados);
  }

  getAll() {
    let url = 'http://localhost:8081/servicos'
    return this.http.get(url)
  }

  getOne(idservico: number) {
    return this.http.get(`http://localhost:8081/servicos/${idservico}`)
  }

  alterar(dados: any) {
    let url = `http://localhost:8081/servicos/${dados.id}`
    return this.http.put(url, dados)
  }

  excluir(idservico: number) {
    return this.http.delete(`http://localhost:8081/servicos/${idservico}`)
  }

}

