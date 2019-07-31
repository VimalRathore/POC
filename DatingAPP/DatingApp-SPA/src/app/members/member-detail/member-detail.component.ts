import { AlertifyService } from './../../_Services/alertify.service';
import { UserService } from './../../_Services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentFactory } from '@angular/core/src/render3';
import { Users } from 'src/app/_models/Users';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  @ViewChild('memberTabs') memberTabs: TabsetComponent;
  user: Users;
  // Image Gallery
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.loadUser();

    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    this.route.queryParams.subscribe(params =>{
     const selectedTab = params['tab'];
     this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;

    })

    // Image Gallery
    this.galleryOptions = [
      {
          width: '650px',
          height: '650px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: false
      }
    ];
    this.galleryImages = this.getImages();
  }
  // Image Gallery
  getImages() {
    const imageUrls = [];
    for (let i = 0; i < this.user.photos.length; i++) {
      imageUrls.push({
        small: this.user.photos[i].url,
        medium: this.user.photos[i].url,
        big: this.user.photos[i].url,
        description: this.user.photos[i].description
      });
    }
    return imageUrls;
  }
  
  selectTab(tabId: number) {
this.memberTabs.tabs[tabId].active = true;
  }

}

