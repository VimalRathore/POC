import { AuthService } from './../_Services/auth.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Users } from '../_models/Users';


@Injectable()
export class MemberEditResolver implements Resolve<Users> {
    constructor(private userSerive: UserService, private authService: AuthService , private router: Router,
        private alertify: AlertifyService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<Users> {
             return this.userSerive.getuser(this.authService.decodeToken.nameid).pipe(
            //  return this.userSerive.getuser(route.params['id']).pipe(
                catchError(error => {
                    this.alertify.error('Problem retrieving your data');
                    this.router.navigate(['/members']);
                    return of(null);
                })
            );
        }
}
