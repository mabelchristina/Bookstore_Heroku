import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';import { AuthGuardService } from './services/auth-guard.service';
;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authguardservice: AuthGuardService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { if (!this.authguardservice.gettoken()) {
      this.router.navigateByUrl('/signup');
    }
    return this.authguardservice.gettoken();
  }
  
  
}
