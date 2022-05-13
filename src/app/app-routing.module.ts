import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdmService } from './auth-adm.service';
import { AuthLoginService } from './auth-login.service';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroHorarioComponent } from './cadastro-horario/cadastro-horario.component';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ConsultaFuncionarioComponent } from './consulta-funcionario/consulta-funcionario.component';
import { ConsultaHorarioComponent } from './consulta-horario/consulta-horario.component';
import { ConsultaServicoComponent } from './consulta-servico/consulta-servico.component';
import { ConsultaUsuarioComponent } from './consulta-usuario/consulta-usuario.component';
import { EditaFuncionarioComponent } from './edita-funcionario/edita-funcionario.component';
import { EditaHorarioComponent } from './edita-horario/edita-horario.component';
import { EditaServicoComponent } from './edita-servico/edita-servico.component';
import { EditaUsuarioComponent } from './edita-usuario/edita-usuario.component';
import { HomeComponent } from './home/home.component';
import { InfoServicosComponent } from './info-servicos/info-servicos.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';


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
    component: CadastroServicoComponent,
    canActivate: [AuthAdmService]
  },
  {
    path:'consultaServico',
    component: ConsultaServicoComponent,
    canActivate: [AuthAdmService]
  },
  {
    path:'servicos/:idservico',
    component: EditaServicoComponent,
    canActivate: [AuthAdmService]
  },
  {
    path:'consultaFuncionario',
    component: ConsultaFuncionarioComponent,
    canActivate: [AuthAdmService]
  },
  {
    path:'cadfuncionario',
    component: CadastroFuncionarioComponent,
    canActivate: [AuthAdmService]
  },
  {
    path:'funcionarios/:idfuncionario',
    component: EditaFuncionarioComponent,
    canActivate: [AuthAdmService]
  },
  {
    path:'cadhorario',
    component: CadastroHorarioComponent,
    canActivate: [AuthLoginService, AuthAdmService]
  },
  {
    path:'cadusuario',
    component: CadastroUsuarioComponent
  },
  {
    path:'servicos',
    component: InfoServicosComponent
  },
  {
    path:'sobre',
    component: SobreComponent
  },
  {
    path:'consultaHorario',
    component: ConsultaHorarioComponent,
    canActivate: [AuthAdmService]
  },
  {
    path:'editausuario/:idusuario',
    component: EditaUsuarioComponent,
    canActivate: [AuthAdmService]
  },
  {
    path:'consultausuario',
    component: ConsultaUsuarioComponent,
    canActivate: [AuthAdmService]
  },
  {
    path:'horarios/:idhorario',
    component: EditaHorarioComponent,
    canActivate: [AuthLoginService]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }