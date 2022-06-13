import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }


  gravar(dados: any) {
    let url = 'https://app-beautydb.herokuapp.com/clientes'
    return this.http.post(url, dados);
  }

  getAll() {
    let url = 'https://app-beautydb.herokuapp.com/clientes'
    return this.http.get(url)
  }

  alterar(dados: any) {
    let url = `https://app-beautydb.herokuapp.com/clientes/${dados.id_cliente}`
    return this.http.put(url, dados)
  }
  getOne(idcliente: number) {
    return this.http.get(`https://app-beautydb.herokuapp.com/clientes/${idcliente}`)
  }
  excluir(idcliente: number) {
    return this.http.delete(`https://app-beautydb.herokuapp.com/clientes/${idcliente}`)
  }
}