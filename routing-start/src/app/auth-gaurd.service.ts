import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGaurd implements CanActivate, CanActivateChild {

    constructor(private authSerivce: AuthService, private router: Router) {}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute, state); 
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authSerivce.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if(authenticated) {
                        return true;
                    }
                    else {
                        this.router.navigate(['/']);
                    }
                }
            );
    }

}