import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  constructor(private serviceFuncionario: FuncionariosService) { }

  gravar(dados: any){
    this.serviceFuncionario.gravar(dados).subscribe(x => window.location.reload())
 }
  ngOnInit(): void {
  }

}
