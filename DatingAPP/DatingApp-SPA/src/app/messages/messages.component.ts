import { AuthService } from './../_Services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Pagination, PaginatedResult } from '../_models/Pagination';
import { Message } from '../_models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
messages: Message[];
pagination: Pagination;
messageContainer = 'Unread';

  constructor(private userService: UserService,
     private auth: AuthService, private route:  ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.messages = data['messages'].result;
      this.pagination = data['messages'].pagination;
    });
  }

  loadMessages() {
  this.userService.getMessages(this.auth.decodeToken.nameid, this.pagination.currentPage,
  this.pagination.itemsPerPage, this.messageContainer).subscribe((res: PaginatedResult<Message[]>) => {
     this.messages = res.result;
     this.pagination = res.pagination;
  }, error => {
    this.alertify.error(error);
  });
}

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadMessages();
  }

}
