import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {


  constructor(private http: HttpClient) { }

  gravar(dados: any) {
    let url = 'https://app-beautydb.herokuapp.com/horarios'
    return this.http.post(url, dados, { responseType: 'text' });
  }

  getAll() {
    let url = 'https://app-beautydb.herokuapp.com/horarios'
    return this.http.get(url)
  }

  getOne(idhorario: number) {
    return this.http.get(`https://app-beautydb.herokuapp.com/horarios/${idhorario}`)
  }

  alterar(dados: any) {
    let url = `https://app-beautydb.herokuapp.com/horarios/${dados.id}`
    return this.http.put(url, dados, { responseType: 'text' })
  }

  excluir(idhorario: number) {
     return this.http.delete(`https://app-beautydb.herokuapp.com/horarios/${idhorario}`)
  }
}
