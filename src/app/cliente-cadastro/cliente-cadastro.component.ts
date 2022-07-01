import { Component, Injectable, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})

@Injectable()

export class ClienteCadastroComponent implements OnInit {

  
  constructor(private serviceCliente: ClienteService) { }
  isSubmitting = false;
  msg: string = ""

  salvar(dados: any){
    this.isSubmitting = true;
    this.serviceCliente.gravar(dados).subscribe(() => {
      (this.msg = 'Cadastro realizado com sucesso!'),
      (this.isSubmitting = false),
        setTimeout(() => {
          this.msg = ''
        }, 5000)
    }, err => {
      (this.msg="Erro ao cadastrar",
      (this.isSubmitting = false))
    })

 }

  ngOnInit(): void {
  }

}
