import { Component } from '@angular/core';
import { Event } from '../shared/models/event';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  events: Event[] = [];

  constructor(private eventService: EventService) {

    this.events = this.eventService.getEvents();
  }

}
