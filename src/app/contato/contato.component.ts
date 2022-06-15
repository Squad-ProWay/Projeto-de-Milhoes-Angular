import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  form: UntypedFormGroup;
  nome: UntypedFormControl = new UntypedFormControl("", [Validators.required]);
  assunto: UntypedFormControl = new UntypedFormControl("", [Validators.required]);
  email: UntypedFormControl = new UntypedFormControl("", [Validators.required, Validators.email]);
  mensagem: UntypedFormControl = new UntypedFormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: UntypedFormControl = new UntypedFormControl(""); 
  submitted: boolean = false; 
  isLoading: boolean = false; 
  responseMessage!: string;

  constructor(private formBuilder: UntypedFormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      nome: this.nome,
      email: this.email,
      assunto: this.assunto,
      mensagem: this.mensagem,
      honeypot: this.honeypot
    });
  }

   ngOnInit(): void {
  }
  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable();
      var formData: any = new FormData();
      formData.append("nome", this.form.get("nome")?.value);
      formData.append("email", this.form.get("email")?.value);
      formData.append("assunto", this.form.get("assunto")?.value);
      formData.append("mensagem", this.form.get("mensagem")?.value);
      this.isLoading = true; 
      this.submitted = false; 
      this.http.post("https://script.google.com/macros/s/AKfycbwgxpV-aeyfntxf3KwM0W_t2o_uV30zaqKe4qkbEhvLprcMycBZzX_Z3G4LW1RMiJFK/exec", formData).subscribe(
        (response) => {

          if (response == "success") {
            this.responseMessage = "Obrigado(a) por sua mensagem! A BeautyTime agradece o seu contato!";
          } else {
            this.responseMessage = "Obrigado(a) por sua mensagem! A BeautyTime agradece o seu contato!";
          }
          this.form.enable();
          this.submitted = true; 
          this.isLoading = false; 
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Oops! Ocorreu um erro... Atualize a página e tente novamente.";
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(error);
        }
      );
    }
  }
}
