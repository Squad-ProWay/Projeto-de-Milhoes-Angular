import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';
import { ConsultaFuncionarioComponent } from './consulta-funcionario/consulta-funcionario.component';
import { ConsultaServicoComponent } from './consulta-servico/consulta-servico.component';
import { EditaFuncionarioComponent } from './edita-funcionario/edita-funcionario.component';
import { EditaServicoComponent } from './edita-servico/edita-servico.component';
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
    path:'',
    component: HomeComponent
  },
  {
    path:'cadservico',
    component: CadastroServicoComponent
  },
  {
    path:'consultaServico',
    component: ConsultaServicoComponent
  },
  {
    path:'servicos/:idservico',
    component: EditaServicoComponent
  },
  {
    path:'consultaFuncionario',
    component: ConsultaFuncionarioComponent
  },
  {
    path:'cadfuncionario',
    component: CadastroFuncionarioComponent
  },

  {
    path:'funcionario/:idfuncionario',
    component: EditaFuncionarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
