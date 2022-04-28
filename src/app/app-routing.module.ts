import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'cadservico',
    component: CadastroServicoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
