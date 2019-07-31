import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { User } from "../_models/user";
import { Observable, of } from "rxjs";
import { UserService } from "../_services/User.service";
import { AlertifyService } from "../_services/alertify.service";
import { catchError } from "rxjs/operators";

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
    constructor(private userService : UserService, private alertyify: AlertifyService,
    private router:Router){

    }
    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getAllUsers().pipe(
            catchError(error => {
                this.alertyify.error("Data retrieveing Issue");
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}