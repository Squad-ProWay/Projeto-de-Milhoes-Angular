import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http: HttpClient) { }

  gravar(dados: any) {
    let url = 'https://app-beautydb.herokuapp.com/servicos'
    return this.http.post(url, dados, { responseType: 'text' });
  }

  getAll() {
    let url = 'https://app-beautydb.herokuapp.com/servicos'
    return this.http.get(url)
  }

  getOne(idservico: number) {
    return this.http.get(`https://app-beautydb.herokuapp.com/servicos/${idservico}`)
  }

  alterar(dados: any) {
    let url = `https://app-beautydb.herokuapp.com/servicos/${dados.id}`
    return this.http.put(url, dados, { responseType: 'text' })
  }

  excluir(idservico: number) {
    return this.http.delete(`https://app-beautydb.herokuapp.com/servicos/${idservico}`)
  }

}

