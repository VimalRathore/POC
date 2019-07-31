import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_Services/auth.service';
import { UserService } from './../../_Services/user.service';
import { Message } from './../../_models/message';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
@Input() recipientId: number;
messages: Message[];

  constructor(private userService: UserService, private auth: AuthService,
     private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loadMessages() {
    this.userService.getMessageThread(this.auth.decodeToken.nameid, this.recipientId)
    .subscribe(messages => {
      this.messages = messages;
      }, error => {
        this.alertify.error(error);
      });
  }

}
