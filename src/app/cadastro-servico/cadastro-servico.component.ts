import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.css']
})
export class CadastroServicoComponent implements OnInit {

  constructor(private serviceServico: ServicosService) { }

  gravar(dados: any){
    this.serviceServico.gravar(dados).subscribe(x => window.location.reload())
  }
  
  ngOnInit(): void {
  }

}
