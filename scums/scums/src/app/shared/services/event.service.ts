import { Injectable } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: Event[] = [];

  constructor() {
    this.events = [
      new Event(1,'Retirement? Is that not for old people?','02 Jan 2022','01 Jan 2022','1400','1600','Expired','A talk given by Michelle Silver. She participated in Ted Talks about retirement, giving new aspects to younger generations regarding retirement.Sign up now to sit in for her talks about retirement.','Retirement'),
      new Event(2,'Wealth Management and Retirement','23 Jan 2022','21 Jan 2022','1300','1500','Expired','A 3 days talk to give insights for proper wealth planning for retirements','Wealth Management'),
      new Event(3,'Making enough money for retirement?','15 Feb 2022','14 Feb 2022','1500','1800','Open','Unsure of how much one actually need to have in their retirement fund before retirement? Join us now in this one day only event to find out!','Wealth management'),
      new Event(4,'A Road to a Comfortable Retirement','23 Feb 2022','21 Feb 2022','1100','1200','Open','An hour of your time, in exchange for a comfortable retirement','Retirement'),
      new Event(5,'Start Early, Enjoy More','14 Dec 2021','12 Dec 2021','1000','1100','Expired','Ever wondered when should we start planning for our retirement?','Retirement'),
      new Event(6,'Why still save for retirement during tough time?','23 Nov 2021','21 Nov 2021','1200','1400','Expired','Life is already tough now , why bother saving for something in the future?','Wealth Management'),
    ];
   }

   getEvents(): Event[] {
    return this.events;
    }
}
