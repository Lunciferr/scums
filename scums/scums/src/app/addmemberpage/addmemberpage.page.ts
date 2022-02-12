import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addmemberpage',
  templateUrl: './addmemberpage.page.html',
  styleUrls: ['./addmemberpage.page.scss'],
})
export class AddmemberpagePage implements OnInit {
  addMemberForm: FormGroup;
  categories: string[];

  constructor() {
    this.categories = ['Mother', 'Father', 'Children','Relatives','Others'];
    this.addMemberForm = new FormGroup({
      name: new FormControl('Please input your name'),
      age: new FormControl(0),
      relationship: new FormControl('Mother'),
      income: new FormControl(0),
      savings: new FormControl(0)
      });
   }

  ngOnInit() {
  }

}
