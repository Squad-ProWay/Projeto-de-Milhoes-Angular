import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.css']
})
export class PageErrorComponent implements OnInit {

  constructor() { }

  msg: string = 'Para ter acesso precisa ter permissão de ADM';

  ngOnInit(): void {
  }

}
