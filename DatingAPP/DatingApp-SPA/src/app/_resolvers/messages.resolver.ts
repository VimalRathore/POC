import { AuthService } from 'src/app/_services/auth.service';
import { Message } from './../_models/message';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class MessageResolver implements Resolve<Message[]> {
    pageNumber = 1;
    pageSize = 5;
    messageContainer = 'Unread';

    constructor(private userSerive: UserService, private auth: AuthService, private router: Router,
        private alertify: AlertifyService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
            return this.userSerive.getMessages(this.auth.decodeToken.nameid, this.pageNumber,

                this.pageSize, this.messageContainer).pipe(
                catchError(error => {
                    this.alertify.error('Problem retrieving messages');
                    this.router.navigate(['/home']);
                    return of(null);
                })
            );
        }
}
