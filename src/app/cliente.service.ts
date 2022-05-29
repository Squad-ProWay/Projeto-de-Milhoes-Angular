import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }


  gravar(dados: any) {
    let url = 'http://localhost:8080/clientes'
    return this.http.post(url, dados);
  }

  getAll() {
    let url = 'http://localhost:8080/clientes'
    return this.http.get(url)
  }

  alterar(dados: any) {
    let url = `http://localhost:8080/clientes/${dados.id}`
    return this.http.put(url, dados)
  }
  getOne(idcliente: number) {
    return this.http.get(`http://localhost:8080/clientes/${idcliente}`)
  }
  excluir(idcliente: number) {
    return this.http.delete(`http://localhost:8080/clientes/${idcliente}`)
  }
}