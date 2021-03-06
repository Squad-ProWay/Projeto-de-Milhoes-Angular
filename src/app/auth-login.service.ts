import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DecodeTokenService } from './decode-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(private decodeToken: DecodeTokenService,
    private router: Router) { }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean  {
   if(!this.temUsuarioLogado()) {
     this.router.navigate(['/login'])
   }
   return true;
 }

 temUsuarioLogado(): boolean {
   let token = this.decodeToken.decodeTokenJWT()
   return token != ''
 }

 ehUsuarioComum(){
  let token =  JSON.stringify(this.decodeToken.decodeTokenJWT())
  let ob = JSON.parse(token)
  return ob.perfil == "USUARIO"
}
}