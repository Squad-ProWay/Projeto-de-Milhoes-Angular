import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  constructor(private http: HttpClient) {}

  gravar(dados: any) {
    let url = 'https://app-beautydb.herokuapp.com/funcionarios';
    return this.http.post(url, dados);
  }

  getAll() {
    let url = 'https://app-beautydb.herokuapp.com/funcionarios';
    return this.http.get(url);
  }

  getOne(idfuncionario: number) {
    return this.http.get(
      `https://app-beautydb.herokuapp.com/funcionarios/${idfuncionario}`
    );
  }

  alterar(dados: any) {
    let url = `https://app-beautydb.herokuapp.com/funcionarios/${dados.id}`;
    return this.http.put(url, dados, { responseType: 'text' });
  }

  excluir(idfuncionario: number) {
    return this.http.delete(`https://app-beautydb.herokuapp.com/funcionarios/${idfuncionario}`)
  }
}
