import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-info-servicos',
  templateUrl: './info-servicos.component.html',
  styleUrls: ['./info-servicos.component.css']
})
export class InfoServicosComponent implements OnInit {

  servicos:any =[]

  constructor(private serviceServico: ServicosService) {
    this.serviceServico.getAll().subscribe(x => this.servicos = x)
  }
  


  ngOnInit(): void {
  }
  
  getAll() {
    throw new Error('Method not implemented.');
  }
 
}
