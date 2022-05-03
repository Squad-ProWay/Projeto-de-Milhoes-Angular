import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {


  constructor(private http: HttpClient) { }

  gravar(dados: any) {
    let url = 'http://localhost:8081/horarios'
    return this.http.post(url, dados);
  }

  getAll() {
    let url = 'http://localhost:8081/horarios'
    return this.http.get(url)
  }

  getOne(idhorario: number) {
    return this.http.get(`http://localhost:8081/horarios/${idhorario}`)
  }

  alterar(dados: any) {
    let url = `http://localhost:8081/horarios/${dados.id}`
    return this.http.put(url, dados)
  }

  excluir(idhorario: number) {
     return this.http.delete(`http://localhost:8081/horarios/${idhorario}`)
  }
}
