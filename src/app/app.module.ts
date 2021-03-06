import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaServicoComponent } from './consulta-servico/consulta-servico.component';
import { EditaServicoComponent } from './edita-servico/edita-servico.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { ConsultaFuncionarioComponent } from './consulta-funcionario/consulta-funcionario.component';
import { EditaFuncionarioComponent } from './edita-funcionario/edita-funcionario.component';
import { CadastroHorarioComponent } from './cadastro-horario/cadastro-horario.component';
import { InfoServicosComponent } from './info-servicos/info-servicos.component';
import { SobreComponent } from './sobre/sobre.component';
import { ConsultaHorarioComponent } from './consulta-horario/consulta-horario.component';
import { NgxMaskModule } from 'ngx-mask';
import { EditaUsuarioComponent } from './edita-usuario/edita-usuario.component';
import { ConsultaUsuarioComponent } from './consulta-usuario/consulta-usuario.component';
import { EditaHorarioComponent } from './edita-horario/edita-horario.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { AuthLoginService } from './auth-login.service';
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    FooterComponent,
    HomeComponent,
    CadastroServicoComponent,
    ConsultaServicoComponent,
    EditaServicoComponent,
    CadastroFuncionarioComponent,
    ConsultaFuncionarioComponent,
    EditaFuncionarioComponent,
    CadastroHorarioComponent,
    InfoServicosComponent,
    SobreComponent,
    ConsultaHorarioComponent,
    EditaUsuarioComponent,
    ConsultaUsuarioComponent,
    EditaHorarioComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }