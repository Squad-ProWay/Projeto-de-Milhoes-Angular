import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-horario',
  templateUrl: './cadastro-horario.component.html',
  styleUrls: ['./cadastro-horario.component.css']
})
export class CadastroHorarioComponent implements OnInit {

  constructor() { }

  onSubmit(form: NgForm){
    console.log(form)
    form.reset()
    window.location.href = "/consultaHorario"
  }
  ngOnInit(): void {
  }

}
