import { Component, OnInit } from '@angular/core';
import { Profile } from '../shared/models/profile';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.page.html',
  styleUrls: ['./profilepage.page.scss'],
})
export class ProfilepagePage implements OnInit {

  profile: Profile[] = [];

  constructor() { 
      this.profile = [
      new Profile(1,'Marcus', 26, 2000, 10000,'','M','Singapore','08 Oct 1996','Singaporean',0)
      ]
  }

  ngOnInit() {
  }

}
